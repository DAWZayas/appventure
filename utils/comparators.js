import { isBefore, isEqual } from 'date-fns'

// Util functions
const generateDate = (date) => {
  let newDate = date.split('-')
  return new Date(newDate[2], newDate[1] - 1, newDate[0])
}

// Compares
const genericComparator = field => (obj1, obj2) =>
  obj1[field] > obj2[field] ? 1
: obj1[field] < obj2[field] ? -1 : 0

const reverseComparator = field => (obj1, obj2) =>
  obj1[field] > obj2[field] ? -1
: obj1[field] < obj2[field] ? 1 : 0

const compareByDate = (obj1, obj2) => {
  let date1 = generateDate(obj1.initDate)
  let date2 = generateDate(obj2.initDate)

  return isBefore(date1, date2) ? 1 : isEqual(date1, date2) ? 0 : -1
}

export {
  genericComparator,
  reverseComparator,
  compareByDate
}
