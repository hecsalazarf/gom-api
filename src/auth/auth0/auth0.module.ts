import { Module, HttpModule, HttpService } from '@nestjs/common';
import { Auth0Service } from './auth0.service';
import { ConfigService } from '../../config/config.service';
import { Auth0ConfigDto } from './dto';

const Auth0ServiceFactory = {
  provide: Auth0Service,
  useFactory: async (config: ConfigService, http: HttpService): Promise<Auth0Service> => {
    const res: Auth0ConfigDto = await config.validate('auth.auth0', Auth0ConfigDto);
    return new Auth0Service(http, res);
  },
  inject: [ConfigService, HttpService],
};
@Module({
  imports: [HttpModule],
  providers: [Auth0ServiceFactory],
  exports: [Auth0ServiceFactory],
})
export class Auth0Module {}
