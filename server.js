const express = require("express");
import express from 'express';


const app = express();
app.get('/usuarios', async (req,res) => {
   try{
    const [rows] = await PoolConection.query('SELECT * FROM usuario');
    res.json(rows)
   }



    catch (erro)

));