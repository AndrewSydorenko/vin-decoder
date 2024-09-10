import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VariableDetails } from "../../Styles";
import axios from "axios";
import { Button } from "@mui/material";

function VariableDetailPage() {
  const { variableId } = useParams();
  const [variables, setVariable] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/${variableId}?format=json`
        );
        if (response) {
          setVariable(response.data.Results);
          setIsLoading(false);
        } else {
          setError("Змінна не знайдена.");
        }
      } catch (err) {
        setError("Не вдалося завантажити дані.");
      }
    };
    fetchVariable();
  }, [variableId]);

  const navigate = useNavigate();

  if (error) return <p className="error">{error}</p>;

  return (
    <VariableDetails>
      <h2>Variable details</h2>
      <Button onClick={() => navigate(-1)} variant="outlined">
        Go back
      </Button>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                {variables.length > 0 ? variables[0].ElementName : "No details"}
              </th>
            </tr>
          </thead>
          <tbody>
            {variables.map((variable) => (
              <tr key={variable.Id}>
                <td>{variable.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </VariableDetails>
  );
}

export default VariableDetailPage;
