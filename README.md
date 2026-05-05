🏦 The React-Redux Bank ⚛️

A simple banking application built using React and Redux Toolkit to demonstrate modern state management concepts like slices, reducers, and async logic.
This is improve version of app from jonas couse i have used react-number-format to format the input and output of money to indian system like 10,000
--future implementation--
--implement currency conversion
--connect customer to account and add more customers

<a href='https://prak-bank-reduxtoolkit-bank.vercel.app/'>Live Demo</a>

🚀 Features
Create a new customer
Manage account operations:
Deposit money
Withdraw money
Request a loan
Currency conversion (USD → EUR, INR, GBP) using an API
Global state management with Redux Toolkit
🧠 Tech Stack
React
Redux Toolkit
React-Redux
JavaScript (ES6+)
External API for currency conversion
🧩 Redux Toolkit Implementation

This project uses Redux Toolkit to simplify state management.

1. Customer Slice

Handles customer-related data.

State includes:

fullName
nationalID
created (boolean)

Actions:

createCustomer → Stores customer details
2. Account Slice

Handles all banking operations.

State includes:

balance
loan
loanPurpose
isLoading (for async operations)

Actions:

deposit → Adds money to balance
withdraw → Deducts money
requestLoan → Creates a loan (if no active loan)
payLoan → Clears loan
Async deposit with currency conversion
🌐 Currency Conversion
When depositing money in a foreign currency, the app:
Calls an API
Converts the amount to USD
Updates the balance

Supported currencies:

USD
EUR
INR
GBP
🖥️ Application Screens
🧾 First Screen – Create Customer
🏦 The React-Redux Bank ⚛️

Create new customer

Customer full name
National ID

[ Create new customer ]
User enters name and national ID
On submission → stored in Redux store
Navigates to account screen
💳 Second Screen – Account Dashboard
🏦 The React-Redux Bank ⚛️

👋 Welcome, Prak

Your account operations

Deposit
[ Amount ] [ Currency ]
[ Deposit ]

Withdraw
[ Amount ]
[ Withdraw ]

Request loan
[ Loan amount ]
[ Loan purpose ]
[ Request loan ]

$0.00

Features:

Deposit money (with currency conversion)
Withdraw money
Request a loan with purpose
Display current balance
