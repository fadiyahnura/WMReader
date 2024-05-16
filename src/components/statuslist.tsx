
"use client";

import { Checkbox, Table, Select, Button } from "flowbite-react";
import { HiTrash,HiOutlinePencil } from "react-icons/hi";
//import { DeleteButtonComponent, EditButtonComponent } from "./button";


function StatusListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell>Id Pelanggan</Table.HeadCell>
          <Table.HeadCell>Persentase Baterai</Table.HeadCell>
          <Table.HeadCell>Date Time</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'17289268'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'100%'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'10-12-2024 14:30'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Aktif'}
            </Table.Cell>
          
            </Table.Row>
          

        </Table.Body>
      </Table>
    </div>
  );
}

export default StatusListComponent; 