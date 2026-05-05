import { useState } from "react";
import { createCustomer } from "./customerSlice";
import { useDispatch } from "react-redux";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
    setFullName("");
    setNationalID("");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Create New Customer
      </h2>

      <div className="space-y-4">
        {/* Full Name Input Group */}
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-slate-600 ml-1"
            htmlFor="fullName"
          >
            Customer Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. John Doe"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />
        </div>

        {/* National ID Input Group */}
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-slate-600 ml-1"
            htmlFor="nationalID"
          >
            National ID
          </label>
          <input
            id="nationalID"
            type="text"
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
            placeholder="ID Number"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-3 px-4 rounded-lg transition-colors shadow-sm active:transform active:scale-[0.98]"
        >
          Create Customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
