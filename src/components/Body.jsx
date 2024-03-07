import BreadCrumb from "./BreadCrumb";
import GetStarted from "./GetStarted";
import TradingViewWidget from "./TradingViewWidget";
import TrendingCoins from "./TrendingCoins";

const Body = () => {
  return (
    <div className="h-full min-h-screen px-8 py-3 bg-gray-200 max-sm:px-4">
      <BreadCrumb />
      <div className="flex gap-4 py-4 max-sm:gap-0">
        <TradingViewWidget />
        <div className="flex flex-col gap-4">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default Body;
