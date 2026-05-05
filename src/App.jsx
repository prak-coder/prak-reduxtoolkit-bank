import CreateCustomer from "./customer/CreateCustomer";
import { useSelector } from "react-redux";
import Customer from "./customer/Customer";
import "./index.css";
import AccountDetails from "./account/AccountDetails";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div>
      <CreateCustomer />
      {fullName !== "" && <Customer />}
      {fullName !== "" && <AccountDetails />}
    </div>
  );
}

export default App;
