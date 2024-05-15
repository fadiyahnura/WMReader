
"use client";

import { Checkbox, Table, Select, Button } from "flowbite-react";
import { HiTrash,HiOutlinePencil } from "react-icons/hi";
//import { DeleteButtonComponent, EditButtonComponent } from "./button";


function DataListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell>Id Pelanggan</Table.HeadCell>
          <Table.HeadCell>Penggunaan Air</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'17289268'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'000936'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'01-12-2024'}
            </Table.Cell>
          
            </Table.Row>
          

        </Table.Body>
      </Table>
    </div>
  );
}

export default DataListComponent;