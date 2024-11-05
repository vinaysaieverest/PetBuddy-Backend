import { dataSchema } from "../model";
export class Login {
    name:string;
    password:string;
    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
     async setLogin(){
        try{
            const name =this.name;
            const password = this.password 
            const user = await dataSchema.findOne({ name});
            if (!user) {
              return false;
            }
            if(user.password===password){
              console.log("login",name)
              return true ;
            }
        }
        catch(e){
            throw new Error("An error occurred while login");
        }   
        }
}