const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    name: {
        type:String
    },
    topic: {
        type:String
    },
    brand:{
        type: String
    },
    update:{
        type:String
    },
    isWebPage:{
        type:Boolean
    }
})

const BlogModel = mongoose.model(
    "student",
    BlogSchema
)

module.exports = BlogModel

// const mongoose = require("mongoose")

// const BlogSchema = mongoose.Schema({
//     name: {
//         type:String
//     },
//     update: {
//         type:String
//     },
//     topic: {
//         type: String
//     },
//     brand: {
//         type: String
//     },
//     isWebpage : { 
//         type: Boolean
//     }

// })
// const BlogModel = mongoose.model(
//     "student",
//     BlogSchema
// )

// module.exports = BlogModel