import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function Grid({ items }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/home/${id}`);
  };

  return (
    <div className="grid grid-cols-5 xs:grid-cols-3 md:m-10 gap-4 xs:m-4">
      {items.map((data) => (
        <Card
          onClick={() => handleCardClick(data.id)}
          key={data.id}
          className="shadow-2xl overflow-hidden border dark:border-white cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-100"
        >
          <div className="flex">
            <div className="sm:w-1/6 xs:w-1/4 m-1 h-full flex items-center justify-center">
              <img src={data.image} alt="" />
            </div>
            <CardHeader className="w-3/4 p-2 ">
              <CardTitle className="truncate">{data.name}</CardTitle>
              <CardDescription className="truncate">
                {data.symbol}
              </CardDescription>
            </CardHeader>
          </div>

          <CardContent className="p-2">
            <p className="xs:text-xs">Total volume: {data.total_volume}</p>
            <p className="xs:text-xs">Market cap: {data.market_cap}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Grid;
