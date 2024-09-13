function calculateAge(birthday) {
    // Convert the birthday string to a Date object
    const birthDate = new Date(birthday);

    // Get the current date
    const today = new Date();

    // Calculate the difference in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const birthday = '2008-04-10'; // YYYY-MM-DD format
const age = calculateAge(birthday);

// Display the age in the HTML
document.getElementById('age').textContent = age;