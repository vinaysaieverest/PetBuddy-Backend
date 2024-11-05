import { dataSchema } from "../model";
import { Response ,Request} from "express";
export class Login {
    username:string;
    password:string;
    constructor(name: string, password: string) {
        this.username = name;
        this.password = password;
    }
     async setLogin(){
        try{
            const username =this.username;
            const password = this.password 
            const user = await dataSchema.findOne({ username});
            if (!user) {
              return {status:400} ;
            }
            if(user.password===password && user.username===username){
              return  {status:200} ; ;
            }
            if(user.username===username){
                return  {status:401} ; ;
              }
              if(user.password===password){
                return  {status:401} ; ;
              }
        }
        catch(e){
            throw new Error("An error occurred while login");
        }   
        }
}