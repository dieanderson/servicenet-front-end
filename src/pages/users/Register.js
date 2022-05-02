import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const Register = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: { value: '', error: false},
        email: { value: '', error: false},
        birthDate: { value: '', error: false},
        password: { value: '', error: false},
        confPassword: { value: '', error: false},
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

    const handleRegisterButton = () => {
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

        if(!form.password.value){
            hasError = true

            newFormState.password = {
                value: form.password.value,
                error: true,
                helperText: 'Obrigatório informar a senha'
            }
        }

        if(!form.confPassword.value){
            hasError = true

            newFormState.confPassword = {
                value: form.confPassword.value,
                error: true,
                helperText: 'Obrigatório informar a confirmação de senha'
            }
        }

        if(form.password.value !== form.confPassword.value){
            hasError = true

            newFormState.password = {
                value: form.password.value,
                error: true,
                helperText: 'Senhas inconsistentes'
            }

            newFormState.confPassword = {
                value: form.confPassword.value,
                error: true,
                helperText: 'Senhas inconsistentes'
            }           
        }

        if(hasError){
            return setForm(newFormState)
        }
        
        const [DD, MM, YYYY] = form.birthDate.value.split('/')
    
        axios.post('http://localhost:8080/api/users', {
            name: form.name.value,            
            birthDate: new Date(`${YYYY}-${MM}-${DD}`),
            email: form.email.value,
            password: form.password.value
        }).then(() => {
            navigate('/users')
        })
    }
    
    return (
        <>
            <Typography variant='h4' gutterBottom component='div' sx={{ textAlign: 'center' }}>
                Cadastro de Usuários
            </Typography>

            <Grid 
                container 
                spacing={2} 
                direction='column' 
                justifyContent='center'
                alignItems='stretch'
                sx={{
                    marginTop: 0,
                }}
            >                   
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
                />
                <TextField 
                    name='birthDate'                   
                    label='Data de Nascimento'
                    InputLabelProps={{ shrink: true }}                    
                    sx={{
                        margin: '10px 0',
                    }}
                    type='date'
                    value={form.birthDate.value}
                    error={form.birthDate.error}
                    helperText={form.birthDate.error ? form.birthDate.helperText : ''}
                    onChange={handleInputChange}
                />
                <TextField
                    name='password'
                    label='Senha'
                    type='password'                    
                    sx={{
                        margin: '10px 0',
                    }}
                    value={form.password.value}
                    error={form.password.error}
                    helperText={form.password.error ? form.password.helperText : ''}
                    onChange={handleInputChange}
                />
                <TextField
                    name='confPassword'
                    label='Confirmar Senha'
                    type='password'
                    sx={{
                        margin: '10px 0',
                    }}
                    value={form.confPassword.value}
                    error={form.confPassword.error}
                    helperText={form.confPassword.error ? form.confPassword.helperText : ''}
                    onChange={handleInputChange}
                />
                <Button 
                    variant='contained'
                    sx={{
                        margin: '10px 0',
                    }}
                    onClick={handleRegisterButton}
                >
                    Cadastrar
                </Button>
                

             </Grid>            

        </>
    )
}

export default Register