const mongoose = require("mongoose");
const saveInDB = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm");
    // Define your schema 
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        catagory: String
    });
    // Define your model
    const Product = mongoose.model("products", productSchema);
    let data = new Product(
        {
            name: "m8",
            price: 1000,
            brand: "max",
            catagory: "mobiles"
        });
    let result = await data.save();
    console.log(result);
}


// Update Model In DataBase
const updateInDB = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm");
    // Define your schema 
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        catagory: String
    });
    const Product = mongoose.model("products", productSchema);
    let data = await Product.updateOne(
        { name: "m8" },
        { $set: { price: 2000 } }
    );
    console.log(data);
}


// Delete in Database

const deleteInDB = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm");
    // Define your schema 
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        catagory: String
    });

    const Product = mongoose.model("products", productSchema);
    let data = await Product.deleteOne(
        { name: "m8" }

    )
    console.log(data)

}

const findInDB = async () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/e-comm");
    // Define your schema 
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        catagory: String
    });

    const Product = mongoose.model("products", productSchema);
    let data = await Product.find();
    console.log(data)
}
findInDB();