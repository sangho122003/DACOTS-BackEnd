const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db')
const multer = require('multer');
const path = require('path');
const postCrtl = {
   addPost: async (req,res)=>{
      console.log(req.body)
      const storage = multer.diskStorage({
         destination: (req, file, cb) => {
             cb(null, 'uploads/'); // Thư mục lưu ảnh
         },
         filename: (req, file, cb) => {
             cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file duy nhất
         }
     });
     try {
      console.log(req.body);
      console.log(req.file); // Kiểm tra file đã upload

      const imageUrl = req.file ? req.file.filename : null; // Lấy tên file hoặc NULL nếu không có ảnh

      const values = [
          req.body.desc,
          imageUrl,
          req.body.userId
      ];

      const sql = 'INSERT INTO `posts`(`desc`, `img`, `userId`) VALUES (?)';
      db.query(sql, [values], (err, data) => {
          if (err) return res.status(500).json({ error: err.message });
          return res.status(200).json({ message: "Post Success!", imageUrl });
      });
  } catch (error) {
      return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
   },
   getPost: async(res,req)=>{
      res.send("User registered");
   },
   updataPost: async(res,req)=>{
      res.send("User registered");
   },
   deletePost: async(res,req)=>{
      res.send("User registered");
   }
};

module.exports = postCrtl;
