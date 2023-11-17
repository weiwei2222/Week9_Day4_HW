import React from "react";
import { useParams } from "react-router-dom";

function Stock(props) {
  const apiKey = "30d53e20d2075e17a1d54260b6dc8226";
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/search?query=${symbol}&apikey=${apiKey}`;
  const [stock, setStock] = useState("null");

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStock(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>{stock.name}</h1>
        <h2>{stock.price}</h2>
        <h2>{stock.change}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return stock ? loaded() : loading();
}

export default Stock;
