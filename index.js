const mongoose = require("mongoose");
const main = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    );
    // Set strictQuery to false
    mongoose.set('strictQuery', false);
    // Set strictQuery to false
    const ProductSchema = new mongoose.Schema({
        name: String
    });

    const ProductModel = mongoose.model("products", ProductSchema);
    let data = new ProductModel({ name: "m8" });
    let result = await data.save();
    console.log(result);
}

main();