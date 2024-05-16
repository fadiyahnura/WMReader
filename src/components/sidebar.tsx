'use client';
import { Sidebar } from 'flowbite-react';

interface SidebarProps {
    activePage?: string;
}

export default function SidebarComponent(props: SidebarProps) {
    const { activePage } = props;

    const active: string = "hover:bg-green-500 bg-green-500 text-white font-bold";
    const nonActive: string = "hover:bg-green-300 font-bold";
    var dashboardStyle: string = nonActive;
    var statusStyle: string = nonActive;
    var dataStyle: string = nonActive;
    var userStyle: string = nonActive;
    var adminStyle: string = nonActive;
    var logsStyle: string = nonActive;


    if (activePage == "dashboard") {
        dashboardStyle = active;
    } else if (activePage == "Status Baterai") {
        statusStyle = active;
    } else if (activePage == "Data WMReader") {
        dataStyle = active;
    }else if (activePage == "Data Pelanggan") {
            userStyle = active;
    }else if (activePage == "Data Admin") {
        adminStyle = active;
    } else if (activePage == "Logout") {
        logsStyle = active;
    }

    return (
        <Sidebar aria-label="WMReader" className='shadow-lg'>
            <h1 className='text-2xl font-bold mx-4'>WMReader</h1>
            <hr className='my-4' />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item className={dashboardStyle} href="dashboard" >
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item className={statusStyle} href="status" >
                        Status Baterai
                    </Sidebar.Item>
                    <Sidebar.Item className={dataStyle} href="data">
                    Data WMReader
                    </Sidebar.Item>
                    <Sidebar.Item className={userStyle} href="user">
                    Data Pelanggan
                    </Sidebar.Item>
                    <Sidebar.Item className={userStyle} href="admin">
                    Data Admin
                    </Sidebar.Item>

                    <Sidebar.Item className={logsStyle} href="logs">
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
     