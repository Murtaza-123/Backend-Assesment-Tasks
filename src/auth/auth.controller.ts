import { Body, Controller, Get, Post, UseGuards , Request} from "@nestjs/common";
import { AuthService } from './auth.service';
import { LoginDto } from "./dto/login";
import { SignUpDto } from "./dto/sign-up";
import { AuthGuard } from "./auth.guard";
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }

    @Get('login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}