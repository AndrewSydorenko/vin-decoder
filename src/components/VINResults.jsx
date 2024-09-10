import React from "react";
import { Link } from "react-router-dom";

function VINResults({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <div>
      <table>
        <tbody>
          {results.map(
            (item, index) =>
              item.Value && (
                <tr key={index}>
                  <td>
                    <Link to={`/variables/${item.VariableId}`}>
                      {item.Variable}
                    </Link>
                  </td>
                  <td>{item.Value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default VINResults;
