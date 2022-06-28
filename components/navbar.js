import { IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { VscThreeBars, VscClose } from "react-icons/vsc"
import styles from "../styles/navbar.module.css"
export default function Navbar() {
  const [barClicked,setBarClicked] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className={styles.navBar}>
        <Typography variant='h4' sx={{ fontSize: '20pt',marginTop:1,marginLeft:1, fontWeight:500}}>
          ATTIC GEO TOOLS
        </Typography>
        <IconButton color="primary" className={styles.hamBurger} sx={{}} onClick={()=>{
          setBarClicked(!barClicked)
        }}>
          {barClicked ? <VscClose size={30} /> : <VscThreeBars size={30} /> }
          
        </IconButton>
      </div>
      <div className={barClicked ? styles.navShow : styles.navHidden}>
        <Link href="/"><a><Typography variant="body1">Home</Typography></a></Link>
        <Link href="/tools"><a><Typography variant="body1">Tools</Typography></a></Link>
      </div>


    </nav>
  )
}
