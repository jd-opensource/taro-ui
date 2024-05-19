import dayjs from 'dayjs'
import _isEmpty from 'lodash/isEmpty'
import { Calendar } from '../../../../types/calendar'

interface PluginArg {
  options: Calendar.GroupOptions

  selectedDate: Calendar.SelectedDate
}

export function handleActive(
  args: PluginArg,
  item: Calendar.Item
): Calendar.Item {
  const { selectedDate } = args
  const { _value } = item

  const { start, end } = selectedDate

  const dayjsEnd = dayjs(end)
  const dayjsStart = start ? dayjs(start) : dayjsEnd

  item.isSelected =
    _value?.isSame(dayjsEnd) ||
    _value?.isSame(dayjsStart) ||
    (_value?.isAfter(dayjsStart) && _value?.isBefore(dayjsEnd))

  item.isSelectedHead = _value?.isSame(dayjsStart)
  item.isSelectedTail = _value?.isSame(dayjsEnd)

  item.isToday = _value?.diff(dayjs(Date.now()).startOf('day'), 'day') === 0

  return item
}

export function handleMarks(
  args: PluginArg,
  item: Calendar.Item
): Calendar.Item {
  const { options } = args
  const { _value } = item
  const { marks } = options

  const markList = marks.filter(mark =>
    _value ? dayjs(mark.value).startOf('day').isSame(_value) : false
  )

  item.marks = markList.slice(0, 1)

  return item
}

// export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options

// if (selectedDates.length === 0) return args

// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item

//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }

//   const { start, end } = date

//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')

//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))

//   item.isHead = item.isHead || _value.isSame(dayjsStart)

//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })

//   return item
// }

export function handleDisabled(
  args: PluginArg,
  item: Calendar.Item
): Calendar.Item {
  const { options } = args
  const { _value, value } = item
  const { minDate, maxDate, disabledDate } = options

  const dayjsItemDate = dayjs(value)

  const dayjsMinDate = dayjs(minDate)
  const dayjsMaxDate = dayjs(maxDate)

  item.isDisabled =
    !!(minDate && _value?.isBefore(dayjsMinDate)) ||
    !!(maxDate && _value?.isAfter(dayjsMaxDate)) ||
    (disabledDate && disabledDate(dayjsItemDate))

  return item
}

export function handleValid(
  args: PluginArg,
  item: Calendar.Item
): Calendar.Item {
  const { options } = args
  const { _value } = item
  const { validDates } = options

  if (!_isEmpty(validDates)) {
    const isInclude = validDates.some(date =>
      _value ? dayjs(date.value).startOf('day').isSame(_value) : false
    )

    item.isDisabled = !isInclude
  }

  delete item._value

  return item
}

export default [handleActive, handleMarks, handleDisabled, handleValid]
