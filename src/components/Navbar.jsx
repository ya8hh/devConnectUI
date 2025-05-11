import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = useSelector(store=>store.user)
 
  return (
   <div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">devConnect</Link>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end flex ">
      {user&& (  <p className=" px-4 text-sm font-medium mr-4">Welcome, {user.firstName}</p>)}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
        
        
       { user && (<div className="flex  gap-2 pr-2">
          
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="user"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>)}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar