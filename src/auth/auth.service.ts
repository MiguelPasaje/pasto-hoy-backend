/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
        ){}

    async signIn(username: string, pass: string): Promise<any>{
        const user = await this.userService.findOne(username);
        if(user?.password !== pass){
            throw new UnauthorizedException();
        }

        const payload = {sub: user.userId, username: user.name}

        return {
            acces_token: await this.jwtService.signAsync(payload)
        }
        
        /* const { password, ...result} = user;
        console.log(password);
        
        return result */
    }

}
