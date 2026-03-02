💰 Expense Tracker (TypeScript Architecture)

A modular and fully structured Expense Tracker Web Application built using TypeScript, following a clean service–UI architecture pattern (similar to real backend structure).

This project demonstrates strong separation of concerns, proper state management, and scalable frontend architecture.

🚀 Features
Core Functionalities

✅ Add Transaction

✅ Edit Transaction

✅ Delete Transaction

✅ View Total Balance

✅ View Current Month Balance

✅ Monthly Overview Tab

✅ Category Overview Tab

✅ LocalStorage Persistence

✅ Clean Modular Architecture

🏗️ Architecture Design

This project follows a structured design similar to backend-based applications.

expense-tracker/

│

├── model/

│   └── transaction.ts

│

├── service/

│   └── expenseService.ts

│

├── ui/

│   └── ui.ts

│

├── app.ts

├── index.html

├── styles.css

└── tsconfig.json

📊 Tab Views
Monthly Overview

Displays transactions filtered for the current month.

Category Overview

Displays transactions grouped under their respective categories.

💾 Data Persistence

All transactions are saved in LocalStorage.

On page reload:

Data is automatically restored

Balance recalculated

Table re-rendered

🛠️ Technologies Used

TypeScript

HTML5

CSS3

ES Modules

LocalStorage API

⚙️ Setup Instructions

Clone the repository:
git clone https://github.com/Aarohini/expense-tracker.git

Install TypeScript:

npm install -g typescript

Compile TypeScript:

tsc

🎯 Learning Outcomes

This project demonstrates:

Strong understanding of TypeScript

Clean architecture thinking

UI state management

Data persistence handling

Filtering & grouping logic

Real-world modular design

👩‍💻 Author

Built as part of learning structured frontend architecture and TypeScript application design.

