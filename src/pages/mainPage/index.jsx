import React, { useState, useEffect } from "react";
import VINForm from "../../components/VINForm";
import VINHistory from "../../components/VINHistory";
import VINResults from "../../components/VINResults";
import axios from "axios";
import { Main } from "../../Styles";

function Home() {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("vinHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const decodeVIN = async (vin) => {
    try {
      const response = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
      );
      const data = response.data;

      const filteredResults = data.Results.filter((item) => item.Value);
      setResults(filteredResults);
      setApiError("");

      const newHistory = [vin, ...history.filter((item) => item !== vin)];
      if (newHistory.length > 3) newHistory.pop();
      setHistory(newHistory);
      localStorage.setItem("vinHistory", JSON.stringify(newHistory));
    } catch (error) {
      setApiError("Помилка при зверненні до API.");
      setResults([]);
    }
  };

  const handleHistorySelect = (vin) => {
    decodeVIN(vin);
  };

  return (
    <Main>
      <h1 className="vinSearch_title">VIN DECODER</h1>
      <VINForm onDecode={decodeVIN} />
      {apiError && <p className="error">{apiError}</p>}
      <VINHistory history={history} onSelect={handleHistorySelect} />
      <VINResults results={results} />
    </Main>
  );
}

export default Home;
