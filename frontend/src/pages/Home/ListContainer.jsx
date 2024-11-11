import React, { useState, useEffect } from "react";
import TableSection from "@/components/Table/TableSection";
import useCurrencyStore from "@/stores/useCurrencyStore";
import PaginationSection from "@/components/Pagination/PaginationSection";

function ListContainer() {
  const { currencies, fetchCurrencies } = useCurrencyStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const totalPages = Math.ceil(currencies.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCurrencies = currencies.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      <TableSection currentCurrencies={currentCurrencies} /> 
      <PaginationSection
        totalItems={currencies.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ListContainer;
