import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function VariableDetailPage() {
  const { variableId } = useParams();
  const [variable, setVariable] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        const response = await axios.get(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
        );
        const found = response.data.Results.find(
          (v) => v.VariableId.toString() === variableId
        );
        console.log(found);

        if (found) {
          setVariable(found);
        } else {
          setError("Змінна не знайдена.");
        }
      } catch (err) {
        setError("Не вдалося завантажити дані.");
      }
    };
    fetchVariable();
  }, [variableId]);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <div>
        <h2>{variable}</h2>
        <p>
          <strong>GroupName:</strong> {variable}
        </p>
        <p>
          <strong>Description:</strong> {variable}
        </p>
      </div>
    </div>
  );
}

export default VariableDetailPage;
