import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const ModalEdit = ({ open, onClose, onConfirm, name, email, birthDate, id }) => {

    const [DD, MM, YYYY] = birthDate.split('/')
    const navigate = useNavigate()
  
    const [form, setForm] = useState({
        name: { value: name, error: false},
        email: { value: email, error: false},
        birthDate: { value: `${YYYY}-${MM}-${DD}`, error: false},
    })

    const handleInputChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleEditButton = () => {
        let hasError = false
        let newFormState = {
            ...form,
        }
        if(!form.name.value){
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Obrigatório informar o nome'
            }
        }

        if(!form.email.value){
            hasError = true

            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: 'Obrigatório informar o e-mail'
            }         
        }

        if(!form.birthDate.value){
            hasError = true

            newFormState.birthDate = {
                value: form.birthDate.value,
                error: true,
                helperText: 'Obrigatório informar a data de nascimento'
            }
        }

        if(hasError){
            return setForm(newFormState)
        }

        const [DD, MM, YYYY] = form.birthDate.value.split('/')
    
        axios.put(`http://localhost:8080/api/users/${id}`, {
        //axios.put(`https://servicenet-api.herokuapp.com/api/users/${id}`, {
            name: form.name.value,            
            birthDate: new Date(`${YYYY}-${MM}-${DD}`),
            email: form.email.value,
        }).then(() => {            
            onConfirm()
        })
    }

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Editar Usuário</DialogTitle>
                <DialogContent>
                    <TextField
                        name='name'                    
                        label='Nome'                    
                        sx={{
                            margin: '10px 0',
                        }}
                        value={form.name.value}
                        error={form.name.error}
                        helperText={form.name.error ? form.name.helperText : ''}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        name='email'                    
                        label='E-mail'  
                        type='email'                  
                        sx={{
                            margin: '10px 0',
                        }}
                        value={form.email.value}
                        error={form.email.error}
                        helperText={form.email.error ? form.email.helperText : ''}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField 
                        name='birthDate'                   
                        label='Data de Nascimento'
                        InputLabelProps={{ shrink: true }}                    
                        sx={{
                            margin: '10px 0',
                        }}
                        type='date'
                        defaultValue={form.birthDate.value}
                        error={form.birthDate.error}
                        helperText={form.birthDate.error ? form.birthDate.helperText : ''}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleEditButton}>Alterar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
  }
  
  export default ModalEdit