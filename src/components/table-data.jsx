import React from 'react'

export const TableData = ({ columns, rows }) => {
   
    return (
      <>
        <table>
          <thead>
            <tr>
              {columns.map((column) => {
                const sortIcon = () => {
                    return '️↕️'
                }
                return (
                  <th key={column.accessor}>
                    <span>{column.label}</span>
                    <button >{sortIcon()}</button>
                  </th>
                )
              })}
            </tr>
            <tr>
              {columns.map((column) => {
                return (
                  <th>
                    <input
                      key={`${column.accessor}-search`}
                      type="search"
                      placeholder={`Search ${column.label}`}
                    />
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.id}>
                  {columns.map((column) => {
                    return <td key={column.accessor}>{row[column.accessor]}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
  
      </>
    )
  }