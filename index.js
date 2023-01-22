const mongoose = require("mongoose");
const main = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm");
    // Define your schema and model
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const ProductModel = mongoose.model("products", ProductSchema);
    let data = new ProductModel({ name: "m8", price: 1000 });
    let result = await data.save();
    console.log(result);
}

main();