import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getRecipes(): object {
    return {
      name: "Egs in flame",
      description: "jdlj dslaůkjf ůldsakjf ůlkjadsůl fjdaslůkjfladskj flůkjaflkjad ůlfj alůdskjflakdjslfjasdlůkjfůlkj"
    };
  }
}
