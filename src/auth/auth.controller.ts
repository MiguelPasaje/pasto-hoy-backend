/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, HttpStatus, Post,Get,Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './public.setMetadata';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signinDto: Record<string, any>){
        return this.authService.signIn(signinDto.username, signinDto.password);

    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
