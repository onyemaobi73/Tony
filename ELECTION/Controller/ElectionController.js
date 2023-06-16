const express = require("express");
const ElectionModel = require("../Model/ElectionModel");

// get all votersCard

const getAllvotersCard = async (req, res) => {
  try {
    const getvotersCard = await ElectionModel.find();
    res.status(200).json({
      message: "gotten all votersCard",
      data: getvotersCard,
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not found any votersCard",
    });
  }
};

// Create new votersCard

const newvotersCard = async (req, res) => {
  try {
    const {
      votersCard,
      ballotBox,
      isInecOfficialMale,
      ElectionDate,
      ElectionDay,
    } = req.body;
    const CreatevotersCard = await ElectionModel.Create({
      votersCard,
      ballotBox,
      isInecOfficialMale,
      ElectionDate,
      ElectionDay,
    });
    res.status(201).json({
      message: "Created a new votersCard",
      data: CreatevotersCard,
    });
  } catch (error) {
    res.status(404).json({
      message: "could not create a votersCard",
    });
  }
};

// const express = require("express");
// const ElectionModel = require("../Model/ElectionModel");

// // get all votersCard

// const getAllvotersCard = async (req, res) => {
//   try {
//     const getvotersCard = await ElectionModel.find();
//     res.status(200).json({
//       message: "gotten all votersCard",
//       data: getvotersCard,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "Could not found any votersCard",
//     });
//   }
// };

// // Create new votersCard

// const newvotersCard = async (req, res) => {
//   try {
//     const {
//       votersCard,
//       ballotBox,
//       isInecOfficialMale,
//       ElectionDate,
//       ElectionDay,
//     } = req.body;
//     const CreatevotersCard = await ElectionModel.Create({
//       votersCard,
//       ballotBox,
//       isInecOfficialMale,
//       ElectionDate,
//       ElectionDay,
//     });
//     res.status(201).json({
//       message: "Created a new votersCard",
//       data: CreatevotersCard,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "could not create a votersCard",
//     });
//   }
// };
