/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  sun,
  mun,
  tue,
  wen,
  thu,
  fri,
  sat,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.sun || day === DaysOfWeek.sat) {
    return true;
  }
  return false;
}
console.log(isWeekend(DaysOfWeek.wen));
console.log(isWeekend(DaysOfWeek.sat));