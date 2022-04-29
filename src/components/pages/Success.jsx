import React from "react";

const Success = () => {
  return (
    <div>
      <div className="">
        <p>
          Your account ending in {} has been successfully linked and debited.
        </p>
      </div>
      <button className="button">Return to CrossWallet</button>
    </div>
  );
};

export default Success;
