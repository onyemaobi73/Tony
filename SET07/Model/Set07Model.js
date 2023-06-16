const mongoose = require("mongoose")

const Set07Schema = mongoose.Schema({
    name: {
        type: String
    },
    Class: {
        type: String
    },
    Laptop: {
        type: StringDecoder
    },
    books: {
        type: String
    },
    isMale: {
        type: Boolean
    }
})

const Set07Model = mongoose.model(
    "student",
    Set07Schema
)

module.exports = Set07Model

// const mongoose = require("mongoose")

// const Set07Schema = mongoose.Schema({
//     name: {
//         type: String
//     },
//     class: {
//         type: String
//     },
//     Laptop: {
//         type: StringDecoder
//     },
//     books: {
//         type: String
//     },
//     isMale: {
//         type: Boolean
//     }
// })

// const Set07Model = mongoose.model(
//     "student",
//     Set07Schema
// )

// module.exports = Set07Model