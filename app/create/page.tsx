import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";

const Page = () => {
  return (
      <div>
          <DashboardNavBar/>
            <div className={"mt-24"}>
                <hr/>
                <div className={"p-6"}>
                    <h1 className={"font-medium text-xl"}>Create Spot</h1>
                </div>
                <hr/>
            </div>
          <div>
              <div className={"w-1/2"}>

              </div>
              <div className={"w-1/2"}>

              </div>
          </div>
      </div>
  )
}

export default Page;