import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Algo deu errado!");
      });
  }, [url]);
  
  return [data, setData, loading];
};
export default useRequestData;
