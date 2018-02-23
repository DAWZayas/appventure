import { isBefore, isEqual } from 'date-fns'

const comparator = (arr, predicate) => arr.sort(predicate)

// Util functions
const generateDate = (date) => {
  let newDate = date.split('-')
  return new Date(newDate[2], newDate[1] - 1, newDate[0])
}

// Compares
const compareByDate = (obj1, obj2) => {
  let date1 = generateDate(obj1.initDate)
  let date2 = generateDate(obj2.initDate)

  return isBefore(date1, date2) ? 1 : isEqual(date1, date2) ? 0 : -1
}

const compareByPrize = (obj1, obj2) =>
  parseInt(obj1.prize) > parseInt(obj2.prize) ? 1
: parseInt(obj1.prize) < parseInt(obj2.prize) ? -1 : 0

const compareByParticipants = (obj1, obj2) =>
  obj1.participants > obj2.participants ? 1
: obj1.participants < obj2.participants ? -1 : 0

export {
  compareByDate,
  compareByPrize,
  compareByParticipants,
  comparator
}
