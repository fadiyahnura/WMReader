//import SidebarComponent from "@/components/sidebar";
import Dashboard from "@/components/dashboard"
export default function MyPage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen">
          {/*<SidebarComponent />*/}
          <Dashboard />
        </div>
         {/* <div>
          <ButtonComponent /> 
        </div>  */}
        <div className="flex flex-grow justify-center items-center"> {/* Meletakkan UserListComponent di tengah */}
         {/* <UserListComponent />   */}
        {/* <FormComponent />   */}
      </div>
      </div>
    </>     
  );
}                               