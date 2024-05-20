import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * this middleware is used to check admin panel call
 * 
 * 
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
    ) {}
    
    async use(req: Request, res: Response, next: Function) {
        var token;
        var isAuthorized = true;
        // if(req.headers['authorization']) {
        //     token = req.headers['authorization'];
        //     token = token.replace('Bearer ', '');
        //     if(token) {
              
        //     }
        // }


        //Will write logic to check if token is valid or not
        //currently i am assuming that token is valid and userId of the user is 6643c709edc94f7295d94f9c
        
        req['user'] = {userId: "6643c709edc94f7295d94f9c"};

        if(!isAuthorized) {
            throw new HttpException('Unauthorized', HttpStatus.FORBIDDEN);
        }
        next();
    }
}
