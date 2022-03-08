export const useMonthDays = () => {
  const currentMonthDays: any = {};
  const lastMonthDays: any = [];
  const nextMonthDays: any = [];
  const date = new Date();

  // set last month days
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastMonthLength = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  for (let d = firstDayOfMonth - 1; d >= 0; d -= 1) {
    lastMonthDays.push(lastMonthLength - d);
  }

  // set current month days
  const currentMonthLength = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let d: number = 1; d <= currentMonthLength; d += 1) {
    currentMonthDays[d] = [];
  }

  // set next month days
  const nextMonthDaysNumber =
    35 - (Object.keys(currentMonthDays).length + lastMonthDays.length);
  for (let d: number = 1; d <= nextMonthDaysNumber; d += 1) {
    nextMonthDays.push(d);
  }

  // return
  return { currentMonthDays, lastMonthDays, nextMonthDays };
};
