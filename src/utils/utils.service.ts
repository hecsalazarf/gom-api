import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UtilsService {

  /**
   * Generate a base64 random id
   * @param length Length of generated output
   */
  public genBase64Id(length: number): Promise<string> {
    /*
    * In Base64 format, the number of output bytes per input byte is 4/3 (33% overhead).
    * So to get X output characters, we need to generate 3/4 of X bytes. A string in base64
    * format is composed of the characters as follows: a-z, A-Z, 0-9, + and /.
    * Sometimes ’+’ and ’/’ characters are not allowed in the output string. We can replace those two characters after conversion to base64 format
    */

    return new Promise((resolve, reject) => {
      const buffer = Buffer.alloc(Math.ceil((length * 3) / 4));
      crypto.randomFill(buffer, (err, buf) => {
        if (err) {
          reject(err);
        }
        const output = buf.toString('base64') // convert to base64 format
          .slice(0, length) // return required number of characters
          .replace(/\+/g, '0') // replace '+' with '0'
          .replace(/\//g, '0'); // replace '/' with '0')

        resolve(output);
      });
    });
  }

}
