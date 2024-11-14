// TabsComponent
import {
  Card,
  CardContent
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableSection from "../Table/TableSection";
import { useState } from "react";
import PaginationSection from "../Pagination/PaginationSection";
import CardSection from "../CardSection/CardSection";

export default function TabsComponent({ coins }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = coins.slice(firstItemIndex, lastItemIndex);

  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="grid">Grid</TabsTrigger>
        <TabsTrigger value="list">List</TabsTrigger>
      </TabsList>
      <TabsContent value="grid">
        <Card>
          <CardContent className="grid grid-cols-3 xs:grid-cols-3 md:m-10 gap-4 xs:m-4">
            {currentItems.map((item, index) => (
              <CardSection key={index} item={item} />
            ))}
          </CardContent>
        </Card>
        <div className="flex justify-center md:w-full md:mt-10 xs:text-sm">
          <PaginationSection
            totalItems={coins.length} // Pass coins.length to PaginationSection
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </TabsContent>
      <TabsContent value="list">
        <Card>
          <CardContent className="space-y-2">
            <TableSection currentCurrencies={coins} totalItems={coins.length} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
