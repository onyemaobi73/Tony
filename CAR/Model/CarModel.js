const mongoose = require("mongoose")

const CarSchema = mongoose.Schema({
    name: {
        type:String
    },
    brand: {
        type: String
    },
    year: {
        type:Number
    },
    model: {
        type:Number
    },
    tyre: {
        type:String
    }
})

const CarModel = mongoose.model(
    "driver",
    CarSchema
)

module.exports = CarModel

// const mongoose = require("mongoose")

// const CarSchema = mongoose.Schema({
//     name: {
//         type:String
//     },
//     brand: {
//         type: String
//     },
//     year: {
//         type:Number
//     },
//     model: {
//         type:Number
//     },
//     tyre: {
//         type:String
//     }
// })

// const CarModel = mongoose.model(
//     "driver",
//     CarSchema
// )

// module.exports = CarModel