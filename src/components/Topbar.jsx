import { Link } from 'react-router-dom'
import LOGO from '../assets/favicon.svg'

function Topbar() {
  return (
    <div className="h-20 py-4 px-6 flex items-center justify-between z-50 fixed w-screen">
      <div className="icon flex items-center gap-2">
        <Link to="/">
          <img src={LOGO} alt="Logo" />
        </Link>
        <p className="text-white font-poppins text-sm md:text-lg lg:text-xl">
          <span className="block">Crosspath</span>
          <span>Pharma</span>
        </p>
      </div>
      <div className="links flex items-center justify-center gap-5">
        <Link
          to="/about"
          className="text-white cursor-pointer font-poppins text-sm md:text-lg lg:text-xl">
          about
        </Link>
        <Link
          to="/verification"
          className="text-white cursor-pointer font-poppins text-sm md:text-lg lg:text-xl">
          Verify
        </Link>
      </div>
    </div>
  )
}

export default Topbar
