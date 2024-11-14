import { coinGeckoInstance } from "@/utils/constants";
import axios from "axios";

export const getCoinData = (id, setError) => {
    console.log({id});
  const coin = coinGeckoInstance
    .get(`coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
        console.log({response});
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};