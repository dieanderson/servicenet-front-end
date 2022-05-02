import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import GroupIcon from '@mui/icons-material/Group'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import HomeIcon from '@mui/icons-material/Home'

const Header = () => {
    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = (route) => {
        navigate(route)
        handleToggleMenu()
      }    

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"    
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => handleToggleMenu()}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ServiceNet
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => {handleMenuClick('/')}}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/users')}}>
                        <ListItemIcon><GroupIcon /></ListItemIcon>
                        <ListItemText>Lista de Usuários</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => {handleMenuClick('/users/add')}}>
                        <ListItemIcon><PersonAddAltIcon /></ListItemIcon>
                        <ListItemText>Cadastro de Usuários</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header