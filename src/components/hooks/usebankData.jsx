import { useEffect, useState } from "react";

const useBankData = () => {
  const [bankData, setBankData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.okra.ng/v2/banks/listForWidget")
      .then((res) => res.json())
      .then((data) => {
        const preparedData = [];
        const banks = data.data.banks;
        for (let i = 0; i < banks.length; i++) {
          const name = banks[i].name;
          const id = banks[i].id;
          const logo = banks[i].v2_logo;
          preparedData.push({ name, id, logo });
        }
        setBankData(preparedData);
      })
      .finally(() => setLoading(false));
  }, []);

  return { bankData, isLoading };
};

export default useBankData;
