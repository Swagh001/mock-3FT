import React from 'react'
import {Link} from "react-router-dom"

function NavLink() {
  return <>
  <Link to="/PostClassifieds">PostClassifieds</Link>
  <Link to="/BrowseClassifieds">BrowseClassifieds</Link>
  </>
}

export default NavLink
