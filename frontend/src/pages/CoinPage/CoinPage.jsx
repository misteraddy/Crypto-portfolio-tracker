import TypographyH1 from "@/components/CoinPageComponent/TypographyH1";
import LineChart from "@/components/LineChart/LineChart";

function CoinPage({ coin, chartData }) {
  
  return (
    <>
      <div className="w-full h-20 text-center">
        <TypographyH1 input={coin.name} />
      </div>
      <div className="">
        <LineChart chartData={chartData} />
      </div>
    </>
  );
}

export default CoinPage;
