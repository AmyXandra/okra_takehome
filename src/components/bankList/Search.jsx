import React from "react";
import useBankData from "../hooks/usebankData";
import "./style.scss";

export default function Search({ setBankList = () => {} }) {
  const { bankData } = useBankData();

  function filterIt(searchKey) {
    const result = bankData.filter((input) => {
      return input.name.toLowerCase().includes(searchKey);
    });
    return setBankList(result);
  }

  const handleChange = (event) => {
    filterIt(event.target.value);
  };

  return (
    <form>
      <input
        className="form-input input-shadow"
        type="text"
        placeholder="search"
        onChange={handleChange}
      />
    </form>
  );
}
