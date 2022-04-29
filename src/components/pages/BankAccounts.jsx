import React from "react";
import BankAccount from "../form/BankAccounts";
import { user } from "../utils/userDetails";

const BankAccounts = ({ updateAuthModalView }) => {
  return (
    <div>
      <h2>Which account do you want to pay from?</h2>

      <h5>Account Name: {user.name}</h5>
      <BankAccount user={user} updateAuthModalView={updateAuthModalView} />
    </div>
  );
};

export default BankAccounts;
