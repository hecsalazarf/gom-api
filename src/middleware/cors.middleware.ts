import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import cors from 'cors';
import { RequestHandler, Request } from 'express';
import { CorsOptions } from 'cors';
import { ConfigService } from '../config/config.service';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    private readonly whitelist: string[]; // cors whitelist

    constructor(private readonly config: ConfigService) {
      this.whitelist = config.has('cors.whitelist') ? config.get('cors.whitelist') : [];
    }

    /**
     * Nest middleware handler
     */
    public use: RequestHandler = cors(this.corsHandler.bind(this)); // create middleware handler

    /**
     * Function that implements custom logic for the Access-Control-Allow-Origin
     * CORS header
     * @param {Request} req Express request
     * @param {() => void} callback Callback after origin verification with CORS options
     */
    private corsHandler(req: Request, callback: (error: Error, options: CorsOptions) => void): void {
      let corsOptions: CorsOptions;
      const origin = req.header('Origin');
      if (
        this.whitelist.indexOf(origin) !== -1 ||
        (process.env.NODE_ENV !== 'production' && !origin) // allow REST tools for non-production envs
      ) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
      } else {
        corsOptions = { origin: false }; // disable CORS for this request
      }
      callback(null, corsOptions); // callback expects two parameters: error and options
    }
}
