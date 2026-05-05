import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, payLoan, requestLoan, withDraw } from "./accountSlice";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";

function AccountDetails() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const balance = useSelector((store) => store.account.balance);
  const dispatch = useDispatch();
  function handleDeposit() {
    dispatch(deposit(Number(amount)));
    setAmount("");
  }
  function handleWithdraw() {
    dispatch(withDraw(amount));
    setAmount("");
  }
  function handleRequestLoan() {
    dispatch(requestLoan(Number(loanAmount), loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }
  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      {/* Main Account Actions Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="p-2 bg-amber-100 rounded-lg text-amber-600">💰</span>
          Account Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Deposit & Withdraw Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Quick Transactions</h3>
            <div className="flex gap-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5"
              >
                <option value="INR">₹ Rupee</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ Euro</option>
              </select>
              <NumericFormat
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                placeholder="Amount"
                value={amount}
                // onChange={(e) => Number(setAmount(e.target.value))}
                onValueChange={(values) => {
                  // .floatValue is the clean number (e.g., 1000 instead of "1,000")
                  setAmount(values.floatValue || 0);
                }}
                className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 outline-none transition-all"
              />
            </div>
            <div className="flex gap-3">
              <button
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-lg transition-colors shadow-sm"
                onClick={handleDeposit}
              >
                Deposit
              </button>
              <button
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 rounded-lg transition-colors shadow-sm"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </div>
          </div>

          {/* Loan Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Request Loan</h3>
            <div className="space-y-3">
              <NumericFormat
                onValueChange={(values) => setLoanAmount(values.floatValue)}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                prefix={"₹"}
                placeholder="Loan Amount"
                value={loanAmount}
                className="w-full border border-slate-300 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 outline-none"
              />
              <input
                type="text"
                placeholder="Loan Purpose"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                className="w-full border border-slate-300 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5 outline-none"
              />
              <button
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 rounded-lg transition-colors shadow-sm"
                onClick={handleRequestLoan}
              >
                Apply for Loan
              </button>
              <button
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 rounded-lg transition-colors shadow-sm"
                onClick={handlePayLoan}
              >
                Pay Loan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Future Balance Component can sit here */}
      <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 rounded-2xl flex items-center justify-center text-slate-400">
        <NumericFormat
          value={balance}
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          prefix={"Rs."}
        />
      </div>
    </div>
  );
}

export default AccountDetails;
