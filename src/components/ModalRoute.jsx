import React, { useState } from "react";
import BankList from "../components/pages/BankList";
import Auth from "../components/pages/Auth";
import BankAccount from "../components/pages/BankAccounts";
import Success from "../components/pages/Success";

function ModalRoute() {
  const initialViews = [
    { state: true, component: BankList, name: "home" },
    { state: false, component: Auth, name: "login" },
    { state: false, component: BankAccount, name: "user account" },
    { state: false, component: Success, name: "success" },
  ];

  const [authModalViews, setAuthModalViews] = useState(initialViews);
  const [currentView, setCurrentView] = useState({
    state: true,
    component: BankList,
    name: "home",
  });
  const updateAuthModalView = (name, data) => {
    const modalViews = [...authModalViews];
    const currentView = modalViews.find((view) => view.state);
    const index = modalViews.findIndex((view) => view.name === name);
    if (currentView) {
      const currentViewIndex = modalViews.findIndex(
        (view) => view.name === currentView.name
      );
      modalViews[currentViewIndex].state = false;
    }

    if (index !== -1) {
      modalViews[index].state = true;
      setCurrentView(modalViews[index]);
      // data && setAuthModalProps(data);
    }
    setAuthModalViews(modalViews);
  };
  return (
    <div>
      {currentView.state === true && currentView.component === BankList && (
        <BankList updateAuthModalView={updateAuthModalView} />
      )}
      {currentView.state === true && currentView.component === Auth && (
        <Auth updateAuthModalView={updateAuthModalView} />
      )}
      {currentView.state === true && currentView.component === BankAccount && (
        <BankAccount updateAuthModalView={updateAuthModalView} />
      )}
      {currentView.state === true && currentView.component === Success && (
        <Success updateAuthModalView={updateAuthModalView} />
      )}
    </div>
  );
}

export default ModalRoute;
