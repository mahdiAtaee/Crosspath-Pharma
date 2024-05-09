import { Outlet } from 'react-router-dom'

function FullLayout() {
  return (
    <div className="px-6 h-[100vh] w-screen overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse z-10">
      <div className="flex-1 h-fit pb-40">
        <Outlet />
      </div>
    </div>
  )
}

export default FullLayout
