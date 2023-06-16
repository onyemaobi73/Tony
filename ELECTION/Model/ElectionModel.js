const mongoose = require("mongoose")

const ElectionSchema = mongoose.Schema({
    voterscard: {
        type: String
    },
    ballotbox: {
        type:String
    },
    ElectionDay: {
        type: String
    },
    ElectionDate: {
        type:Number
    },
    isInecOfficialMale: {
        type: Boolean
    }
})

const ElectionModel = mongoose.model(
    "Candidate",
    ElectionSchema
)

module.exports = ElectionModel

// const mongoose = require("mongoose")

// const ElectionSchema = mongoose.Schema({
//     voterscard: {
//         type: String
//     },
//     ballotBox: {
//         type: String
//     },
//     ElectionDay: {
//         type:String
//     },
//     ElectionDate: {
//         type:Number
//     },
//     isInecOfficialMale: {
//         type: Boolean
//     }
// })

// const ElectionModel = mongoose.model(
//     "Candidate",
//     ElectionSchema
// )

// module.exports = ElectionModel