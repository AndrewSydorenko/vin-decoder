import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Form } from "../Styles";

function VINForm({ onDecode }) {
  const [vin, setVin] = useState("");
  const [error, setError] = useState("");

  const validateVIN = (vin) => {
    const regex = /^[A-HJ-NPR-Z0-9]{17}$/;
    return regex.test(vin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vin.trim() === "") {
      setError("Поле не повинно бути порожнім.");
      return;
    }
    if (vin.length !== 17) {
      setError("VIN повинен містити 17 символів.");
      return;
    }
    if (!validateVIN(vin)) {
      setError("VIN містить недопустимі символи.");
      return;
    }
    setError("");
    onDecode(vin);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          id="vin"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          maxLength="17"
          className=".vinSearch_input"
          placeholder="Наприклад: 1FTFW1CT5DFC10312"
        />
        <button type="submit" className=".vinSearch_submit">
          <IoSearchOutline />
        </button>
      </Form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default VINForm;
