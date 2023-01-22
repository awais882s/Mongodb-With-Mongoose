const mongoose = require("mongoose");
const main = async () => {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/test");
    const ProductSchema = new mongoose.Schema({
        name: String
    });

    const ProductModel = mongoose.model("products", ProductSchema);
    let data = new ProductModel({ name: "m8" });
    let result = await data.save();
    console.log(result);
}

main();