const express = require("express");
const BlogModel = require("../Model/BlogModel");

// get all Bloggers

const getAllBlogger = async (req, res) => {
  try {
    const getBlogger = await BlogModel.find();
    res.status(200).json({
      message: "gotten all bloggers",
    });
  } catch (error) {
    res.status(400).json({
      message: "could not found any bloggers",
    });
  }
};

// Create new bloggers

const newBloggers = async (req, res) => {
  try {
    const { name, topic, brand, update, isWebpage } = req.body;
    const CreateBlogger = await BlogModel.Create({
      name,
      update,
      topic,
      brand,
      isWebpage,
    });
    res.status(201). json({
        message: "Created a new Blogger",
        data: CreateBlogger,
      });
  } catch (error) {
    res.status(404).json({
      message: "could not create a blogger",
    });
  }
};

// const express = require("express")
// const BlogModel = require("../Model/BlogModel")

// // get all blogger
// const getAllBlogger = async (req, res)=>{
//   try {
//     const getBlogger = await BlogModel.find()
//     return res.status(200).json({
//       message:"gotten all Bloggers"
//     })
//   } catch (error) {
//     return res.status(400).json({
//       message:"could not found any blogger"
//     })
//   }
// }

// // create new Bloggers

// const newBloggers = async (req, res)=>{
//   try {
//     const {name, topic, update, brand, isWebpage} = req.body
//     const CreateBlogger = await BlogModel.create({
//       name,
//       update,
//       brand,
//       topic,
//       isWebpage
//     })
//     res.status(201).json({
//       message:"Created a new Bloggers", data:CreateBlogger
//     })
//   } catch (error) {
//     res.status(400).json({
//       message:"Could not create a blogger"
//     })
//   }
// }
