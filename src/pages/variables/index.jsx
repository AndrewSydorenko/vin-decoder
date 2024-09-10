import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VariablesList } from "../../Styles";
import Button from "@mui/material/Button";

function Variables() {
  const [variables, setVariables] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
        );
        setVariables(response.data.Results);
        setIsLoading(false);
      } catch (err) {
        setError("Не вдалося завантажити список змінних.");
      }
    };
    fetchVariables();
  }, []);

  const navigate = useNavigate();
  if (error) return <p>{error}</p>;

  return (
    <VariablesList>
      <h2>All variables</h2>
      <Button onClick={() => navigate(-1)} variant="outlined">
        Go back
      </Button>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table>
          <tbody>
            {variables.map((variable) => (
              <tr key={variable.Name}>
                <td>
                  <Link to={`/variables/${variable.ID}`}>{variable.Name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </VariablesList>
  );
}

export default Variables;
