import React, { useEffect, useState } from "react";
import PaginationSection from "@/components/Pagination/PaginationSection";
import Grid from "./Grid";
import useCurrencyStore from "@/stores/useCurrencyStore";

function GridContainer() {
  // Zustand store for currencies
  const { currencies, fetchCurrencies } = useCurrencyStore();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = currencies.slice(firstItemIndex, lastItemIndex);

  // Fetch currencies on component mount
  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      <Grid items={currentItems} />

      <div className="flex justify-center md:w-full md:mt-10 xs:text-sm">
        <PaginationSection
          totalItems={currencies.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default GridContainer;
