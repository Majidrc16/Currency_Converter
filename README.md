Currency Converter

A simple and responsive React-based Currency Converter that allows users to convert currency values between different currencies using live exchange rates.

🚀 Features

Live Exchange Rates: Fetches real-time exchange rates using an API.

Easy-to-Use Interface: Simple and intuitive UI.

Responsive Design: Works seamlessly on all devices.

Error Handling: Displays user-friendly error messages.

Smooth UI Enhancements: Modern styles with hover effects, animations, and transitions.

📌 Installation

To run this project locally, follow these steps:

1️⃣ Clone the Repository

 git clone https://github.com/Majidrc16/currency-converter.git


3️⃣ Install Dependencies

npm install

4️⃣ Start the Application

npm start

This will run the app in development mode. Open http://localhost:3000/ in your browser to view it.

⚙️ File Structure

📂 currency-converter
│── 📂 src
│   ├── 📂 API
│   │   ├── postAPI.js  # Handles API requests
│   ├── App.js         # Main component
│   ├── App.css        # Stylesheet
│   ├── index.js       # Entry point
│── 📜 package.json    # Project dependencies
│── 📜 README.md       # Project documentation

🔧 Technologies Used

React.js (Frontend Framework)

CSS3 (Styling)

JavaScript (ES6+) (Logic & Functionality)

Fetch API/Axios (Fetching Exchange Rates)

🛠 How to Use

Enter the amount you wish to convert.

Select the From and To currency.

Click Convert to see the converted value.

If an error occurs, a message will be displayed.

📌 API Reference

This project fetches exchange rates using the getCurrencyData() function in postAPI.js.
Make sure to use a valid API key if required.

📜 License

This project is open-source and free to use under the MIT License.

💡 Contributing

Feel free to fork, clone, or submit pull requests to improve the project! 😊

