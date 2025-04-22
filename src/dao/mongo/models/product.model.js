import {Schema, Types, model} from "mongoose";
const collection = "products";
const schema = new Schema(
    {
    title: { type: String, required: true, index: true },
    description: { type: String},
    price: { type: Number,  default:10},
    stock: { type: Number,  default: 10},
    img:[ { type: String, default: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fdominandoelecommerce.com%2Ftipos-fotografia-para-ecommerce%2F&psig=AOvVaw0Ygv_fXChu7e02bITULpcj&ust=1743547907380000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCTzqK0tYwDFQAAAAAdAAAAABAE"]}],
    onsale:{ type: Boolean, default: false},
    owner_id: {type: String, required: true},
    }, 
    {timestamps: true}
);

schema.pre(/^find/, function () {
    this.populate("owner_id", "email avatar");
});

const Product = model(collection, Schema);
export default Product; 