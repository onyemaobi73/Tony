const express = require("express");
const CarModel = require("../Model/CarModel");

// get all cars

const getAllCars = async (req, res) => {
  try {
    const getCar =  await CarModel.find()
    res.status(200).json({
      message: "gotten all cars",
      data:getAllCars
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not found any Cars",
    });
  }
};

// Create new cars

const newCars = async (req, res) => {
  try {
    const { name, brand, year, model, tyre } = req.body;
    const CreateCar = await CarModel.Create({
      name,
      year,
      brand,
      model,
      tyre,
    });
    res.status(201).json({
      message: "Created a new car",
      data: CreateCar,
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not create a car",
    });
  }
};
// const express = require("express");
// const CarModel = require("../Model/CarModel");

// // get all cars

// const getAllCars = async (req, res) => {
//   try {
//     const getCar = await CarModel.find();
//     res.status(200).json({
//       message: "gotten all cars",
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "Could not found any Cars",
//     });
//   }
// };

// // Create new cars

// const newCars = async (req, res) => {
//   try {
//     const { name, brand, year, model, tyre } = req.body;
//     const CreateCar = await CarModel.Create({
//       name,
//       year,
//       brand,
//       model,
//       tyre,
//     });
//     res.status(201).json({
//       message: "Created a new car",
//       data: CreateCar,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "Could not create a car",
//     });
//   }
// };
