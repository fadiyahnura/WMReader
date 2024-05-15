"use client";
import ChartLine from "@/components/charts";
import SidebarComponent from "@/components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row ">
        <div className="h-screen sticky top-0 bg-grey">
          <SidebarComponent activePage="dashboard"/>
        </div>
        <div className="p-8 flex-1">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl my-4">Dashboard</h1>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Data WMReader Masuk</div>
                <div className="font-extrabold text-2xl py-2">100</div>
                <div className="">Hari  ini</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Total Pelanggan</div>
                <div className="font-extrabold text-2xl py-2">5</div>
                <div className="">Pelanggan WMReader</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Total Baterai Aktif</div>
                <div className="font-extrabold text-2xl py-2">100</div>
                <div className="">Status Baterai</div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-md p-6">
                <div className="">Pelanggan Baru</div>
                <div className="font-extrabold text-2xl py-2">100</div>
                <div className="">Hari Ini</div>
              </div>
            </div>
            <div className="bg-white rounded-md h-[80vh]">
              <div className="p-10">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
       