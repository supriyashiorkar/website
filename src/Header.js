import { Link, Outlet, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <ul className='header1'>
       
        <li><NavLink to="/hmpg">College Website</NavLink></li>
       
        <li><NavLink to="/wbst">Website</NavLink></li>
        <li><NavLink to="/wbst3"> Website 3</NavLink></li>
        <li><NavLink to="/wbst4"> Website 4</NavLink></li>
        <li><NavLink to="/grdp">Grid</NavLink></li>
        <li><NavLink to="/lcalci">LCalculator</NavLink></li>
        <li><NavLink to="/ecomweb">ECommerce Website</NavLink></li>
        <li><NavLink to="/Ecombtstp">ECommerce Bootstrap</NavLink></li>
      </ul>
      <Outlet />
    </>
  )
}
export default Header;