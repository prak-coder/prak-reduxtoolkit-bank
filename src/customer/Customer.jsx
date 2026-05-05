import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector((store) => store.customer.fullName);
  return <div>Welcome to Redux-Slice Bank {fullName}</div>;
}

export default Customer;
