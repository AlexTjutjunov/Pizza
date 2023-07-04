import React, {useState} from 'react';
import Logo from '../Assets/Logo.svg'
import {BsCart2} from 'react-icons/bs' 
import {HiOutlineBars3} from 'react-icons/hi2'
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundednIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: 'Home',
            icons: <HomeIcon/>
        }, 
        {
            text: 'About',
            icons: <InfoIcon/>
        }, 
        {
            text: 'Testimonials',
            icons: <CommentRoundedIcon/>
        },
        {
            text: 'Contact',
            icons: <PhoneRoundednIcon/>
        },
        {
            text: 'Cart',
            icons: <ShoppingCartRoundedIcon/>
        },
    ]

  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt="" />
        </div>
        <div className='navbar-links-container'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contacts</a>
            <a href="">
                <BsCart2 className='navbar-cart-icon'/>
            </a>
            <button className='primary-button'>
                Booking now
            </button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3
                onClick={() => setOpenMenu(true)}
            />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor='rught'>
        <box sx={{width: 250}}
        role='presentation'
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
            <list>
                {menuOptions.map(item => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <listItemIcon>{item.icon}</listItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </list>
        </box>
        </Drawer>

    </nav>
  )
}

export default Navbar;