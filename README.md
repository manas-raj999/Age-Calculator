# Age Calculator

## 📌 Overview
This is a simple **Age Calculator** web application that calculates and displays your exact age in **years, months, days, hours, minutes, and seconds**. The application updates the age dynamically every second. (https://roadmap.sh/projects/age-calculator)

Checkout : https://manas-raj999.github.io/Age-Calculator/

## 🚀 Features
- **User-friendly Date Picker**: Uses **Flatpickr** for an interactive date selection.
- **Real-time Age Calculation**: Continuously updates the age down to the last second.
- **Error Handling**: Prevents invalid inputs such as future dates.
- **Simple & Responsive UI**: Designed for ease of use on desktop and mobile.

## 🛠️ Technologies Used
- **HTML** – Structure of the webpage
- **CSS** – Styling for a clean UI
- **JavaScript** – Core logic for age calculation
- **Luxon.js** – Handles date-time calculations efficiently
- **Flatpickr.js** – Enhances the date input field

## 📌 How It Works
1. **Enter Your Birthdate**: Select or type your birthdate in the given input field.
2. **Click 'Calculate'**: The system validates your input and computes your age.
3. **Live Updates**: Your age will update dynamically every second.

## 📦 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/manas-raj999/age-calculator.git
   ```
2. Open `index.html` in a web browser.

## 🖥️ File Structure
```
/age-calculator
│── index.html      
│── styles.css      
│── script.js       
│── README.md       
```

## ⚙️ Dependencies
This project uses the following **CDN links** for third-party libraries:
- **Luxon** (for date manipulation)
- **Flatpickr** (for date input enhancement)

Include these in your HTML file:
```html
<!-- Flatpickr CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- Flatpickr JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<!-- Luxon JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js"></script>
```

## 📝 License
MIT License. Feel free to modify and use it as needed!
