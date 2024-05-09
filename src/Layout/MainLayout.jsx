import { Outlet } from 'react-router-dom'
import Orbit from '../assets/Orbit.png'

function MainLayout() {
  return (
    <>
      <img
        src={Orbit}
        alt=""
        className="w-[35vw] h-[35vw] absolute top-1/4 right-[15vw] object-cover z-0"
      />
      <div className="px-6 h-[calc(100vh-72px)] mt-[72px] w-screen lg:w-[60vw] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse z-10">
        <div className="flex-1 h-fit pb-40">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
