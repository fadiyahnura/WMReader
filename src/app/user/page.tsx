import { CreateButtonComponent } from "@/components/button";
import SidebarComponent from "@/components/sidebar";
import UserListComponent from "@/components/userlist";
import Link from "next/link";

export default function UserList() {
  return (
    <div className="flex flex-col lg:flex-row"> {/* Menggunakan flexbox untuk mengatur tata letak */}
      <div className="h-auto lg:h-screen lg:w-1/4 sticky top-0"> {/* Mengatur lebar sidebar untuk layar kecil */}
        <SidebarComponent activePage="user"/>
      </div>
      <div className="p-4 lg:p-4 w-full lg:w-full"> {/* Mengatur padding dan lebar konten */}
        
        <div className="w-full bg-white rounded-lg my-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center pl-4 pr-4"> {/* Menggunakan flexbox */}
            <h1 className="font-bold text-3xl my-4">Data Pelanggan</h1>
            <div className="mt-4 lg:mt-0 lg:ml-4"> {/* Mengatur margin dan posisi tombol */}
              <CreateButtonComponent text="+ Add New Pelanggan" color="greenFill"/>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <UserListComponent/>
        </div>
      </div>
    </div>
  );
}
