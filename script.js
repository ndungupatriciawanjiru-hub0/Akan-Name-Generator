// Arrays
const maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Current year (will be 2026 when you submit)
const CURRENT_YEAR = new Date().getFullYear();

// Get form inputs
function getInputs() {
    return {
        day:   Number(document.getElementById("day").value),
        month: Number(document.getElementById("month").value),
        year:  Number(document.getElementById("year").value),
        gender: document.querySelector('input[name="gender"]:checked')?.value
    };
}

// Validate inputs
function isValidDate(day, month, year, gender) {
    if (!gender) {
        alert("Please select your gender (Male or Female)");
        return false;
    }

    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12");
        return false;
    }

    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31");
        return false;
    }

    // Year validation - prevents 5-digit years and unrealistic values
    if (isNaN(year) || year < 1900 || year > CURRENT_YEAR) {
        alert(`Please enter a valid year between 1900 and ${CURRENT_YEAR}`);
        return false;
    }

    // Prevent future dates
    const today = new Date();
    const inputDate = new Date(year, month - 1, day);
    if (inputDate > today) {
        alert("Birth date cannot be in the future");
        return false;
    }

    return true;
}

// Adjust month & year 
function adjustMonthYear(month, year) {
    if (month === 1 || month === 2) {
        return { m: month + 12, y: year - 1 };
    }
    return { m: month, y: year };
}

// Calculate day of the week (0=Sunday ... 6=Saturday)
function calculateDayNumber(cc, yy, mm, dd) {
    const a = Math.floor(cc / 4) - 2 * cc - 1;
    const b = Math.floor(5 * yy / 4);
    const c = Math.floor(26 * (mm + 1) / 10);
    const d = dd;

    let total = a + b + c + d;
    let dayNum = total % 7;

    if (dayNum < 0) dayNum += 7;

    return dayNum;
}

// Form submit handler
document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const { day, month, year, gender } = getInputs();

    if (!isValidDate(day, month, year, gender)) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    const { m, y } = adjustMonthYear(month, year);

    const cc = Math.floor(y / 100);
    const yy = y % 100;

    const dayIndex = calculateDayNumber(cc, yy, m, day);

    const akanName = gender === "male" ? maleAkan[dayIndex] : femaleAkan[dayIndex];
    const dayName = weekdays[dayIndex];

    document.getElementById("result").innerHTML =
        `You were born on <strong>${dayName}</strong>.<br>` +
        `Your Akan name is <strong>${akanName}</strong>.`;
});