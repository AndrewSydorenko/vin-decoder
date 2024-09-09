import React from "react";
import { History } from "../Styles";

function VINHistory({ history, onSelect }) {
  return (
    <History>
      <h3>Останні запити:</h3>
      <ul>
        {history.map((vin, index) => (
          <li key={index}>
            <button onClick={() => onSelect(vin)}>{vin}</button>
          </li>
        ))}
      </ul>
    </History>
  );
}

export default VINHistory;
