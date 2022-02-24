import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import './SwipeButton.css'

function SwipeButton() {
  return (
    <div className="SwipeButtons">
     <IconButton>  
     <ReplayIcon   fontSize="Large"  />
     </IconButton>
     <IconButton>  
     <CloseIcon   fontSize="Large" />
     </IconButton>
     <IconButton>  
     <StarRateIcon  fontSize="Large"  />
     </IconButton>
     <IconButton>  
     <FavoriteIcon   fontSize="Large" />
     </IconButton>
     <IconButton>  
     <FlashOnIcon   fontSize="Large" />        
     </IconButton>
    </div>
  )
}

export default SwipeButton