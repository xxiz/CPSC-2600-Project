import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true }
});

const incomeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    source_label: { type: String, required: true },
    amount: { type: Number, required: true },
    date_received: { type: Date, required: true }
});

const subscriptionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    provider: { type: String, required: true },
    tags: [String],
    annual_cost: { type: Number, required: true },
    description: { type: String },
    renewal_date: { type: Date },
});

const bigExpenseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    provider: { type: String, required: true },
    tags: [String],
    longevity: { type: Number, required: true },
    price_per_year: { type: Number, required: true },
    description: { type: String },
});

const savingsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    account_type: { type: String, required: true },
    total_amount: { type: Number, required: true },
});

const savingsDepositSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    savings_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Savings', required: true },
    amount: { type: Number, required: true },
    date_deposited: { type: Date, required: true },
    percentage_of_total_savings: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);
const Income = mongoose.model('Income', incomeSchema);
const Subscription = mongoose.model('Subscription', subscriptionSchema);
const BigExpense = mongoose.model('BigExpense', bigExpenseSchema);
const Savings = mongoose.model('Savings', savingsSchema);
const SavingsDeposit = mongoose.model('SavingsDeposit', savingsDepositSchema);

module.exports = {
    User,
    Income,
    Subscription,
    BigExpense,
    Savings,
    SavingsDeposit
};