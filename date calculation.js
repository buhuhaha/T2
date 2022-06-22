const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const date1 = new Date(dateText1);
    const date2 = new Date(dateText2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / DAY_IN_MILLISECONDS);
    return diffDays;
}

getDaysBetweenDates('10/15/2020', '12/1/2020');  
