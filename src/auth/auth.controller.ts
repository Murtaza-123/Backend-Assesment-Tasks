import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LoginDto } from "./dto/login";
import { SignUpDto } from "./dto/sign-up";
import { RolesGuard } from "../common/guards/api-key/admin.guard";
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }
    //@UseGuards(RolesGuard)
    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    }
}