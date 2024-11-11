// src/stores/useCoinStore.js
import { create } from 'zustand';
import { coinGeckoInstance } from '@/utils/constants';

const useCoinStore = create((set) => ({
  coin: null,
  fetchCoin: async (id) => {
    if (!id) return;  
    
    try {
      const response = await coinGeckoInstance.get(`coins/${id}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      });
      const data = response.data;
      set({ coin: data });
    } catch (error) {
      console.error("Error fetching coin data from CoinGecko:", error);
      set({ coin: null });
    }
  },
}));

export default useCoinStore;
