'use client';
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Checkbox, Flowbite } from "flowbite-react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { HiTrash, HiOutlinePencil, HiOutlineExclamationCircle } from "react-icons/hi";
import EditDetailDoorModal, { AddDoorModal, AddUserDoorModal, DialogDecisionModal } from "./modal";
import Link from "next/link";

interface ButtonProps {
  text: string;
  size?: string;
  color?: string;
  link?: string;
  whatFor?: string;
  data?: any;
}

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white font-bold",
      greenFill: "bg-green-500 hover:bg-green-600 text-white font-bold",
      redFill: "bg-red-600 hover:bg-red-800 text-white font-bold",
    },
    size: {
      door: "px-20 py-2 ",
      back: "px-2.5 pt-1 pb-1.5"
    }
  },
};

export default function ButtonComponent(props: ButtonProps) {
  const { text, size, color, link } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => { }} color={color} size={size} href={link}>{text}</Button>
    </Flowbite>
  );
}

export function ButtonLinkComponent(props: ButtonProps) {
  const { text, size, color, link, data } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Link href={{
        pathname: link,
        query: { data: data }
      }}>
        <Button onClick={() => { }} color={color} size={size}>{text}</Button>
      </Link>
    </Flowbite>
  );
}

export function ButtonModalComponent(props: ButtonProps) {
  const [openModal, setOpenModal] = useState(false);
  const { text, color, whatFor } = props;

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => { setOpenModal(true) }} color={color}>{text}</Button>
      {whatFor == "Add Door" ? <AddDoorModal openModal={openModal} onCloseModal={onCloseModal} /> : <h1></h1>}
      {whatFor == "Edit Doors Detail" ? <EditDetailDoorModal openModal={openModal} onCloseModal={onCloseModal} /> : <h1></h1>}
      {whatFor == "Add User Detail" ? <AddUserDoorModal openModal={openModal} onCloseModal={onCloseModal} /> : <h1></h1>}
      {whatFor == "Delete" ? <DialogDecisionModal openModal={openModal} onCloseModal={onCloseModal} /> : <h1></h1>}
    </Flowbite>
  );
}

export function CreateButtonComponent(props: ButtonProps) {
  const { text, size, color } = props;
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  let colorButton: any = "primary";

  if (size != "door") {
    colorButton = color;
  }
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => setOpenModal(true)} color={colorButton} size={size}>{text}</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create User Account</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" ref={emailInputRef} placeholder="Nama Lengkap" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="alamat" value="alamat" />
              </div>
              <TextInput id="alamat" required />
            </div>
            <div className="flex justify-end">
              <Button color={colorButton}>Create</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
}

export function DeleteButtonComponent(props: ButtonProps) {
  const { text, size, color } = props;
  const [openModal, setOpenModal] = useState(false);

  let colorButton: any = "primary";

  if (size != "door") {
    colorButton = color;
  }
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => setOpenModal(true)} color={colorButton} ><HiTrash className="mr-2 h-5 w-5" /></Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to {text} this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
}

export function EditButtonComponent(props: ButtonProps) {
  const { text, size, color } = props;
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  let colorButton: any = "primary";

  if (size != "door") {
    colorButton = color;
  }
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => setOpenModal(true)} color={colorButton} className="mr-2"><HiOutlinePencil className="mr-2 h-5 w-5" /></Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">{text} Pelanggan Account</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" ref={emailInputRef} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="alamat" value="alamat" />
              </div>
              <TextInput id="alamat" required />
            </div>
            <div className="flex justify-end">
              <Button color={colorButton} onClick={() => setOpenModal(false)} >{text}</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
}

export function CreateAdminButtonComponent(props: ButtonProps) {
  const { text, size, color } = props;
  const [openModal, setOpenModal] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  let colorButton: any = "primary";

  if (size != "door") {
    colorButton = color;
  }
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => setOpenModal(true)} color={colorButton} size={size}>{text}</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={usernameInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create Admin Account</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput id="username" ref={usernameInputRef} placeholder="Username" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-end">
              <Button color={colorButton}>Create</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
}
