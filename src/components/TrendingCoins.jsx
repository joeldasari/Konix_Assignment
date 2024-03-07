import { useEffect, useState } from "react";
import { RxTriangleUp } from "react-icons/rx";
const TrendingCoins = () => {
  const [trendCoins, setTrendCoins] = useState([]);
  useEffect(() => {
    const fetchBitcoin = async () => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const jsonData = await result.json();
      console.log(jsonData);
      console.log(jsonData.coins.slice(0, 3));
      setTrendCoins(jsonData.coins.slice(0, 3));
    };
    fetchBitcoin();
  }, []);
  return (
    <div className="rounded-lg max-sm:hidden gap-3 flex flex-col p-6 bg-white h-[200px] w-[380px]">
      <p className="text-lg font-semibold">Trending Coins (24h)</p>
      {trendCoins.map((coin) => (
        <div
          className="flex items-center justify-between"
          key={coin.item.coin_id}
        >
          <div className="flex gap-2">
            <img
              className="w-4 h-4"
              src={coin.item.large}
              alt={coin.item.name}
            />
            <p className="text-sm font-medium">
              {coin.item.name} ({coin.item.symbol})
            </p>
          </div>
          <div>
            <p className="flex items-center w-24 gap-1 px-2 py-1 rounded-sm bg-green-50">
              <RxTriangleUp className="text-xl text-green-600" />
              <span className="text-sm text-green-600">
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2) +
                  "%"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
