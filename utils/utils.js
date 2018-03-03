import { format, isBefore, subDays } from 'date-fns'

const ObjFilter = (obj, predicate) =>
  Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {})

const ObjMathMax = (arr, field) => Math.max.apply(Math, arr.map((obj) => obj[field]))

const isOutDate = (obj) => {
  let date = obj.finishDate.split('-')
  let compareDate = new Date(date[2], date[1] - 1, date[0])
  let today = subDays(format(new Date()), 2)
  return isBefore(today, compareDate)
}

const isOutDateD = (date) => {
  date = date.split('-')
  let compareDate = new Date(date[2], date[1] - 1, date[0])
  let today = format(new Date())
  return isBefore(today, compareDate)
}

const deleteKey = (obj) => {
  const clone = {...obj}
  delete clone['.key']
  return clone
}

const getArray = (obj) => {
  const clone = deleteKey(obj)
  const xs = []
  for (var i in clone) {
    xs.push(clone[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

const randomNumber = x => Math.floor(Math.random() * (x + 1))

const getSingleTournament = (tournaments) => {
  const array = getArray(tournaments).filter(tournament => isOutDate(tournament))
  return array[randomNumber(array.length)]
}

export {
  isOutDate,
  isOutDateD,
  deleteKey,
  getArray,
  randomNumber,
  ObjMathMax,
  ObjFilter,
  getSingleTournament
}
