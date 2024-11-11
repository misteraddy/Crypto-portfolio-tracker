import { create } from 'zustand';
import { coinGeckoInstance } from '@/utils/constants';

const useCurrencyStore = create((set) => ({
  currencies: [],
  fetchCurrencies: async () => {
    const { currencies } = useCurrencyStore.getState();
    if (currencies.length > 0) {
      console.log("Data already in store, skipping API call.");
      return;
    }
    try {
      const response = await coinGeckoInstance.get("coins/markets", {
        params: {
          vs_currency: "usd",
        },
      });
      const data = response.data;
      console.log({data});
      set({ currencies: response.data });
    } catch (error) {
      console.error("Error fetching data from CoinGecko:", error);
    }
  },
}));

export default useCurrencyStore;
