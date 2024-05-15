import { CreateButtonComponent } from "@/components/button";
import SidebarComponent from "@/components/sidebar";
import DataListComponent from "@/components/datalist";
import Link from "next/link";

export default function DataList() {
  return (
    <div className="flex flex-col lg:flex-row"> {/* Menggunakan flexbox untuk mengatur tata letak */}
      <div className="h-auto lg:h-screen lg:w-1/4 sticky top-0"> {/* Mengatur lebar sidebar untuk layar kecil */}
        <SidebarComponent activePage="data"/>
      </div>
      <div className="p-4 lg:p-4 w-full lg:w-full"> {/* Mengatur padding dan lebar konten */}
        
        <div className="w-full bg-white rounded-lg my-4 py-4">
          <div className="flex flex-col lg:flex-row  justify-between pl-4"> {/* Menggunakan flexbox */}
          <h1 className="font-bold text-3xl my-4">Data WMReader</h1>
          </div>
        </div>
        <div className="overflow-x-auto">
          <DataListComponent/>
        </div>
      </div>
    </div>
  );
}
