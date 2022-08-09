export function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0
  }
  export function isString(value) {
    return typeof value === 'string' || value instanceof String
  }
  
  export function isNumber(value) {
    return typeof value == 'number' && !isNaN(value)
  }
  
  export function toLower(value) {
    if (isString(value)) {
      return value.toLowerCase()
    }
    return value
  }
export function filterRows(rows, filters) {
    if (isEmpty(filters)) return rows
  console.log("filters",filters);
    return rows.filter(row => {
      return Object.keys(filters).every(accessor => {
        const value = row[accessor]
        const searchValue = filters[accessor]
        if (isString(value)) {
          return toLower(value).includes(toLower(searchValue))
        }
  
        if (isNumber(value)) {
          return value === searchValue
        }
  
        return false
      })
    })
  }