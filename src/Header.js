import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import './Header.css'

function Header() {
  return (
    <div className='heading'>
    <IconButton>
     <PersonIcon className='icon'   fontSize='Large'  />
     </IconButton>

     <img className='image' src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" alt="tinderlogo" />
  
     <IconButton>
     <ForumIcon className='icon'  fontSize='Large' />
     </IconButton>

    


    </div>
  )
}

export default Header


{/* https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png */}