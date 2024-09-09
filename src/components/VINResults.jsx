import React from "react";
import { Results } from "../Styles";

function VINResults({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <Results>
      <table>
        <tbody>
          {results.map(
            (item, index) =>
              item.Value && (
                <tr key={index}>
                  <th className="varTitle">{item.Variable} </th>
                  <td className="varDescr">{item.Value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </Results>
  );
}

export default VINResults;
