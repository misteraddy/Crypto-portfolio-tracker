import { create } from "zustand";
import useCurrencyStore from "./useCurrencyStore";

const useSearchStore = create((set) => ({
    fetchSearchResults: async (query) => {
        if (query.length <= 0) {
            return;
        }

        try {
            
            const { currencies } = useCurrencyStore.getState();

            const result = currencies.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );

            useCurrencyStore.setState({ currencies: result });

        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
}));

export default useSearchStore;
