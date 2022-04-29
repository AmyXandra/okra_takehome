import React from "react";
import AuthForm from "../form/Auth";

const Auth = ({ updateAuthModalView }) => {
  return (
    <div>
      <h2>Type in your credentials</h2>
      <p>
        By entering your GTBank credentials here, you’re authorising Okra to pay
        Kent Woods the agreed amount.
      </p>
      <div>
        <AuthForm updateAuthModalView={updateAuthModalView} />
      </div>
    </div>
  );
};

export default Auth;
