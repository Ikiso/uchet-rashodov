import {Injectable} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {User} from "../schemas/users.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string): Promise<User | null> {
        const user = await this.usersService.findOne(username);

        if(!user) {
            return null;
        }

        return user;
    }
}