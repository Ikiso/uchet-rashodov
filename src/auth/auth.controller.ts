import {Controller, Post, Res, Body, HttpStatus} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Response} from "express";

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService) {}

    @Post('registration')
    async registrationUser(
        @Body() createUserDto: CreateUserDto,
        @Res() res: Response,
        ) {
        await this.userService.registration(createUserDto);

        res.statusCode = HttpStatus.CREATED;
        return res.send('user created');
    };
}