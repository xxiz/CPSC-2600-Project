# CPSC-2600-Project
The goal of this project is to build a finance tracker based around my Google Sheets which I currently use to track various expenses etc. This finance tracker is meant to be self-hosted and does not expect user signups. There will be an option to store multiple user data.

## Features

### Monthly
- [ ] Track Income (Source, Amount, Date Received)
- [ ] Track Subscriptions (Category, Amount, Date Spent)
- [ ] Track Big Expenses (Category, Amount, Date Spent)
- [ ] Savings Management (Given a personal set formula, calculate how much to save each month)
    - [ ] Uses a Savings Split Sheet to determine this
- [ ] Savings Location (TFSA, RRSP, etc.)
- [ ] Monthly Breakdown of Expenses (Category, Percentage)
- [ ] Track Portfolio (Stock, Amount, Date Bought) - MAYBE?
- [ ] Track Crypto (Crypto, Amount, Date Bought) - MAYBE?

### Yearly
- [ ] Yearly Breakdown of Income (Source, Percentage)
- [ ] Yearly Breakdown of Savings (Savings Location, Percentage)
- [ ] Yearly Breakdown of Subscriptions (Category, Percentage)
- [ ] Yearly Breakdown of Big Expenses (Category, Percentage)
- [ ] Yearly Breakdown of Portfolio (Stock, Percentage) - MAYBE?
- [ ] Yearly Breakdown of Crypto (Crypto, Percentage) - MAYBE?

### Other
- [ ] Sick UI (Graphs, Charts, etc.)

## Models

<!-- ### User
- _id (unique identifier)
- username
- password (BCrypt)
- email
- first_name
- last_name
- date_of_birth -->

### Income
- _id (unique identifier)
<!-- - user_id (foreign key to User model) -->
- type (Job, Hustle, etc.)
- source_label
- amount
- date_received
<!-- - index on user_id field -->

### Subscription
- _id (unique identifier)
<!-- - user_id (foreign key to User model) -->
- type (Need Or Want)
- status
- category
- amount
- provider
- tags
- annual_cost (how much does this cost per year?)
- description (optional)
- renewal_date (optional)
- index on category, and provider fields

### Big Expense
- _id (unique identifier)
<!-- - user_id (foreign key to User model) -->
- type (Need Or Want)
- status
- category
- amount
- provider
- tags
- longevity (how long will this expense last me?)
- price_per_year (how much does this cost per year?)
- description (optional)
- index on category, and provider fields

### Savings
- _id (unique identifier)
<!-- - user_id (foreign key to User model) -->
- account_type (TFSA, RRSP, etc.)
- total_amount
<!-- - index on user_id field -->

### Savings Deposit
- _id (unique identifier)
<!-- - user_id (foreign key to User model) -->
- savings_id (foreign key to Savings model)
- amount
- date_deposited
- percentage_of_total_savings
- index on savings_id fields