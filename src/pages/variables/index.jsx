import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { VariablesList } from "../../Styles";

function Variables() {
  const [variables, setVariables] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        const response = await axios.get(
          "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json"
        );
        setVariables(response.data.Results);
        console.log(response.data.Results);
      } catch (err) {
        setError("Не вдалося завантажити список змінних.");
      }
    };
    fetchVariables();
  }, []);

  if (error) return <p className="error">{error}</p>;
  if (variables.length === 0) return <p>Завантаження...</p>;

  return (
    <div className="container">
      <VariablesList>
        <h2>Список змінних</h2>
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
      </VariablesList>
    </div>
  );
}

export default Variables;
