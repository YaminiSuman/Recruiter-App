import React from 'react'
import { useState
 } from 'react'
 import { filterRows } from '../utils/helper';
export const TableData = ({ columns, rows }) => {
    const [filters, setFilters] = useState({});
    const filteredRows = filterRows(rows, filters);

    const handleSearch = (value, accessor) => {    
        if (value) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            [accessor]: value,
          }))
        } else {
          setFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters }
            delete updatedFilters[accessor]
    
            return updatedFilters
          })
        }
      }

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
                      onChange={(event) => handleSearch(event.target.value, column.accessor)}
                    />
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => {
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