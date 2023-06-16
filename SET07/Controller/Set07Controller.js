const express = require("express");
const Set07Model = require("../Model/Set07Model");

// get all set07student

const getAllset07student = async (req, res) => {
  try {
    const getset07student = await Set07Model.find();
    res.status(200).json({
      message: "gotten all set07student",
      data: getset07student,
    });
  } catch (error) {
    res.status(404).json({
      message: "could not found any set07student",
    });
  }
};

// Create new set of set07student

const newset07student = async (req, res) => {
  try {
    const { name, Class, laptop, books, isMale } = req.body;
    const Createset07student = await Set07Model.Create({
      name,
      Class,
      laptop,
      books,
      isMale,
    });
    res.status(201).json({
      message: "Created or added a new set07student",
      data: Createset07student,
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not create or add a new set07student",
    });
  }
};

// const express = require("express");
// const Set07Model = require("../Model/Set07Model");

// // get all set07student

// const getAllset07student = async (req, res) => {
//   try {
//     const getset07student = await Set07Model.find();
//     res.status(200).json({
//       message: "gotten all set07student",
//       data: getset07student,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "could not found any set07student",
//     });
//   }
// };

// // Create new set of set07student

// const newset07student = async (req, res) => {
//   try {
//     const { name, Class, laptop, books, isMale } = req.body;
//     const Createset07student = await Set07Model.Create({
//       name,
//       Class,
//       laptop,
//       books,
//       isMale,
//     });
//     res.status(201).json({
//       message: "Created or added a new set07student",
//       data: Createset07student,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "Could not create or add a new set07student",
//     });
//   }
// };
