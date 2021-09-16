import React from 'react';
import penguin from '../media/penguin.png'
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

const navBar = () => {

  const frowBetween = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'space-between',
  }

  const frowCenter = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'center',
    paddingTop: '50px',
  }


  return (
    <div style={frowCenter}>
      <div style={{...frowBetween, width: '50%'}}>
        <div>
          <a href=''>
            <img src={penguin} style={{width: '30px'}}/>
          </a>  
        </div>
        <div style={{...frowBetween, width: '6%'}}>
          
        <Button style={{ background: '#DA291C', color: 'white' }} href='https://twitter.com/FastFoodSMB'>Twitter</Button>
        </div>

      </div>
    </div>
  )
}

export default navBar;