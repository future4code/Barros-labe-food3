import React, { useEffect, useState } from "react";
import axios from "axios";
import { Autorizacao, BASE_URL } from "../constants/constants";

function Restaurants() {
  useEffect(() => {
   axios.get(BASE_URL, Autorizacao).then(()=>{
    console.log("Funcionou");

   }).catch(()=>{
    console.log("Deu ruim");

   })
  }, []);
};
export default Restaurants;

