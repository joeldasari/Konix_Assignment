import React, { useEffect } from "react";

const New = () => {
  useEffect(() => {
    const fetchBitcoin = async () => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`
      );
      const jsonData = await result.json();
      console.log(jsonData);
    };
    fetchBitcoin();
  }, []);
  return <div>New</div>;
};

export default New;
