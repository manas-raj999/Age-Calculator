document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#birthdate", {
        dateFormat: "d/m/Y",
        allowInput: true
    });
    
    let ageInterval;

    function updateAge() {
        const birthdateInput = document.getElementById("birthdate").value;
        if (!birthdateInput) {
            document.getElementById("result").innerText = "";
            return;
        }
        
        const [day, month, year] = birthdateInput.split("/").map(Number);
        const birthdate = luxon.DateTime.local(year, month, day);
        const now = luxon.DateTime.now();
        
        if (!birthdate.isValid || birthdate > now) {
            document.getElementById("result").innerText = "Invalid birth date";
            return;
        }
        
        if (ageInterval) {
            clearInterval(ageInterval);
        }
        
        function displayAge() {
            const now = luxon.DateTime.now();
            const diff = now.diff(birthdate, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject();
            document.getElementById("result").innerHTML = `You are <strong>${Math.floor(diff.years)} years ${Math.floor(diff.months)} months ${Math.floor(diff.days)} days ${Math.floor(diff.hours)} hours ${Math.floor(diff.minutes)} minutes ${Math.floor(diff.seconds)} seconds</strong> old`;
        }
        
        ageInterval = setInterval(displayAge, 1000);
        displayAge();
    }
    
    document.getElementById("calculate").addEventListener("click", updateAge);
});
