import {Link} from 'react-router-dom'

const Header = () => {
  const user = null
  return (
    <header>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">Trimmer</Link>
        </div>
        {
          user ? <div className="flex-none gap-2">

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             
              <li><Link to={"/links"}>My Links</Link></li>
            <li>
            <button className='text-left mt-2'>Logout</button>
            </li>
            </ul>
          </div>
        </div> : <button className='btn btn-primary'>Login</button>
        }
      </div>
    </header>
  )
}

export default Header
