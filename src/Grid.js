import React from "react";

const Grid = ({ config, data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {config.map(item => <th key={item.field}>{item.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData.imdbID}>
              {config.map(item => <td key={item.field}>{item.component ? <item.component data={rowData[item.field]} /> : rowData[item.field]} </td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default Grid;
