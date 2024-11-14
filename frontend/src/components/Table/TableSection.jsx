// TableSection Component
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import PaginationSection from '../Pagination/PaginationSection';

const TableSection = ({ currentCurrencies, totalItems }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = currentCurrencies.slice(firstItemIndex, lastItemIndex);

  const handleRowClick = (id) => {
    navigate(`/coin/${id}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead className="text-right">Current Price</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">24h Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((coin) => (
            <TableRow
              key={coin.id}
              onClick={() => handleRowClick(coin.id)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <TableCell>
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              </TableCell>
              <TableCell>{coin.name}</TableCell>
              <TableCell>{coin.symbol.toUpperCase()}</TableCell>
              <TableCell className="text-right">{coin.current_price.toFixed(2)}</TableCell>
              <TableCell className="text-right">{coin.market_cap.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <span className={coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center md:w-full md:mt-10 xs:text-sm">
        <PaginationSection
          totalItems={totalItems}  // Pass the totalItems prop here
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableSection;
