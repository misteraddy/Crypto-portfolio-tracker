import TypographyH1 from "@/components/Heading/TypographyH1";
import React from "react";

function CoinPage({ coin }) {

  const graph = "https://datavizproject.com/wp-content/uploads/types/Line-Graph.png";

  return (
    <>
      <div className="mt-4 flex justify-center">
        <img  src={coin.image?.small} alt="" />
        <TypographyH1 input={coin.name} />
      </div>
      <div className="sm:grid sm:grid-cols-4 ">
        <div className="sm:col-span-2 flex justify-center mt-4">
            <img className="h-96 w-96" src={graph} alt=""/>
        </div>
        <div className="sm:m-4 col-span-2 ">
            <p>{coin.description?.en}</p>
        </div>
      </div>
    </>
  );
}

export default CoinPage;
