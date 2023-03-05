import {Injectable} from "@nestjs/common";
import {User, UsersDocument} from "../schemas/users.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserDto} from "../auth/dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private usersModel:  Model<UsersDocument>,
                ) {}
    async registration(createUserDto: CreateUserDto): Promise<User | null> {
        const existingUser = this.usersModel.collection.findOne({
            username: createUserDto.username,
        });

        if(existingUser) {
            return null
        }

        const createdUser = new this.usersModel(createUserDto);
        return createdUser.save()
    }

    async findOne(username: string): Promise<User> {
        return this.usersModel.findOne({username})
    }
}