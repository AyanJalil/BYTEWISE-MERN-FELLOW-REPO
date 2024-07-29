import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

import { logo } from '../utils/constants.js'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position: 'sticky',color:'white', background: '#000', top: 0, justifyContent: 'space-between'}}>
        <Link to="/" style={{ display: 'flex', alignItems:'center', color:'white'}}>
            <img src={logo} height={45} />
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar
