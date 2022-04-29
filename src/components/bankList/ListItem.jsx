import React from "react";
import useBankData from "../hooks/usebankData";
import "./style.scss";

export default function ListItem({ bankList, updateAuthModalView }) {
  const { isLoading } = useBankData();

  const handleRoute = (bank) => {
    updateAuthModalView("login", bank);
  };
  const BankItem = (props) => (
    <div className="item flex" onClick={() => handleRoute(props)}>
      <img src={props.logo} className="icon" alt={props.name} width="32" />
      <p>{props.name}</p>
    </div>
  );
  return (
    <div className="py-10">
      {!isLoading ? (
        bankList.map((bank) => <BankItem key={bank.id} {...bank} />)
      ) : (
        <p className="loading-text">Loading Data...</p>
      )}
    </div>
  );
}
