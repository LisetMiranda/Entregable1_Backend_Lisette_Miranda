import { Schema, model } from "mongoose";

const collection ="users";
const Schema = new Schema(
    {
    name: { type: String}, 
    email: {type: String, required:true, index:true,unique:true},
    password: {type:String, required:true},
    role: {type: String, default: "USER", enum: ["USER","ADMIN"]},
    avatar: {type: String, default: "https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png",
    },
    },
    {timestamps: true}
);

const User =  model(collection,schema);
export default User; 