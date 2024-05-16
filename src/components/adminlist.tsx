
"use client";

import { Checkbox, Table, Select, Button } from "flowbite-react";
import { HiTrash,HiOutlinePencil } from "react-icons/hi";
import { DeleteButtonComponent, EditButtonComponent } from "./button";


function AdminListComponent() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
        <Table.HeadCell>ID Admin</Table.HeadCell>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Alamat</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'17289268'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Fadiyah Nur Afifah'}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'gmp blok f no 81'}
            </Table.Cell>
            <Table.Cell className="flex">
              <EditButtonComponent text="Edit" size="door" color="primary" />
              <DeleteButtonComponent text="Delete" size="door" color="primary" />
            </Table.Cell>
          
            </Table.Row>
              

        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminListComponent;   