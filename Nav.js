import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (<nav>
    <Link to="/">Getdata</Link>
    <Link to="/add">Addresult</Link>
    <Link to="/result">Getresult</Link>
    </nav>
  )
}

export default Nav