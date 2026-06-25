// Weekly attendance trend ("Verlauf"): one overall headcount per week.
//
// MAINTAINERS: the rows below are PLACEHOLDERS, not real numbers. Replace them
// with the actual weekly counts (and add a new row each week). Keep the list
// sorted by date ascending. Use the new Date(year, monthIndex, day) style
// (monthIndex is 0-based, so 5 = June), matching event.data.js.
//
// Single series for now (one number per week). If we later want per-event
// trends, each row can grow into { date, count, byEvent: { ... } }.
export const WEEKLY_ATTENDANCE = [
    { date: new Date(2026, 4, 25), count: 12 }, // PLACEHOLDER - replace with real count
    { date: new Date(2026, 5, 1), count: 18 },  // PLACEHOLDER - replace with real count
    { date: new Date(2026, 5, 8), count: 15 },  // PLACEHOLDER - replace with real count
    { date: new Date(2026, 5, 15), count: 23 }, // PLACEHOLDER - replace with real count
];
