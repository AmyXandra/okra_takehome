import React, { useState } from "react";
// import "./style.scss";

const BankAccount = (props) => {
  const { user, updateAuthModalView } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const onValueChange = (event) => {
    console.log("log");
    setSelectedOption(event.target.value);
  };
  const handleSubmit = () => {
    updateAuthModalView("success", selectedOption);
  };
  return (
    <form onSubmit={handleSubmit}>
      {user.accounts.map((data) => {
        return (
          <div key={data.nuban}>
            <label className="radio">
              <div>
                <span className="bold">
                  {data.name}: {data.nuban}
                </span>
                <span>
                  {data.currency === "ngn" ? "₦" : "$"} {data.balance}
                </span>
              </div>
              <input
                type="radio"
                value={data.nuban}
                checked={selectedOption === data.nuban}
                onChange={onValueChange}
              />
            </label>
          </div>
        );
      })}
      <button className="button" type="submit">
        Pay ₦1,000 + NIP Charges
      </button>
    </form>
  );
};
export default BankAccount;
