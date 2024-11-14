import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


function CardSection({ item }) {

    const navigate = useNavigate(); 

  return (
    <Card
      onClick={() => navigate(`/coin/${item.id}`)}
      key={item.id}
      className="shadow-2xl overflow-hidden border dark:border-white cursor-pointer dark:hover:bg-gray-900 hover:bg-gray-100"
    >
      <div className="flex">
        <div className="sm:w-1/6 xs:w-1/4 m-1 h-full flex items-center justify-center">
          <img src={item.image} alt={item.name} />
        </div>
        <CardHeader className="w-3/4 p-2">
          <CardTitle className="truncate">{item.name}</CardTitle>
          <CardDescription className="truncate">{item.symbol}</CardDescription>
        </CardHeader>
      </div>

      <CardContent className="p-2">
        <p className="xs:text-xs">Total volume: {item.total_volume}</p>
        <p className="xs:text-xs">Market cap: {item.market_cap}</p>
      </CardContent>
    </Card>
  );
}

export default CardSection;
