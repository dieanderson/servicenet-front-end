import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'

import UserCard from '../../components/UserCard'

const List = () => {
    const [users, setUsers] = useState([])
    const [valueSearch, setValueSearch] = useState('')

    useEffect(() => {
        handleSearchUser() 
    }, [])

    
    const handleSearchUser = () => {
        axios.get(`http://localhost:8080/api/users/${valueSearch}`)
        //axios.get(`https://servicenet-api.herokuapp.com/api/users/${valueSearch}`)
            .then(response => {
                const data = response.data
                setUsers(data)
            })
    }

    const handleSearchKeyDown = e => {
        if (e.keyCode === 13) {
            handleSearchUser()
        }
    }

    const handleRemoveUser = id => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
        //axios.delete(`https://servicenet-api.herokuapp.com/api/users/${id}`)
            .then(() => {
                const newUsersState = users.filter(user => user.id !== id)
                setUsers(newUsersState)
                handleSearchUser()
            })
        
    }
    
    return (
        <>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }}>
                Lista de Usuários
            </Typography>

            <Grid container spacing={3}>   
                <Grid item xs={12}>  
                    <Paper                        
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '97%' }}
                    >                
                        <InputBase
                            name='search'
                            autoFocus
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Pesquise pelo nome"                            
                            value={valueSearch}
                            onChange={e => setValueSearch(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} onClick={handleSearchUser}>
                            <SearchIcon />
                        </IconButton>                        
                    </Paper>
                </Grid>

                {                    
                    users.map(user => (                        
                        <Grid item xs={12} md={4} key={user._id}>
                            <UserCard                                 
                                name={user.name}
                                email={user.email}
                                birthDate={moment.utc(user.birthDate).format('DD/MM/YYYY')}
                                id={user._id}
                                onRemoveUser={handleRemoveUser}
                                handleSearchUser={handleSearchUser}
                            />
                        </Grid>
                    ))
                }
            </Grid>            
        </>
    )
}
  
export default List
  