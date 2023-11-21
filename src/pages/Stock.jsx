import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Stock(props) {
  const apiKey = "30d53e20d2075e17a1d54260b6dc8226";
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
  const [stock, setStock] = useState(null);
  console.log(stock, typeof stock);

  const getStock = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStock(data);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(stock, typeof stock);
  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock();
  }, []);

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  console.log(stock);
  return stock
    ? stock.map((onestock, index) => (
        <div key={index}>
          <h1>Name:{onestock.name}</h1>
          <h2>Price:{onestock.price}</h2>
          <h3>Change:{onestock.change}%</h3>
          <h3>dayHigh:{onestock.dayHigh}</h3>
          <h3>dayLow:{onestock.dayLow}</h3>
        </div>
      ))
    : loading();
}

export default Stock;
