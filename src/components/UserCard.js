import React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'
import ModalEdit from './ModalEdit'

const UserCard = ({
    name,
    email,
    birthDate,
    id,
    onRemoveUser,
}) => {
    const [openModalConfirm, setOpenModalConfirm] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)


    const handleToggleOpenModalConfirm = () => {
        setOpenModalConfirm(!openModalConfirm)
    }

    const handleToggleOpenModalEdit = () => {
        setOpenModalEdit(!openModalEdit)
    }

    const handleConfirmModal = id => {
        onRemoveUser(id)
        handleToggleOpenModalConfirm()
    }

    const handleEditModal = () => {
        handleToggleOpenModalEdit()
    }

    const handleModalConfirm = () => {
        handleToggleOpenModalConfirm()
    }

    const handleModalEdit = () => {
        handleToggleOpenModalEdit()
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    {name[0]}
                </Avatar>
                }
                title={name}
                subheader={email}
            />
            
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {`Data de Nascimento: ${birthDate}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {`Matrícula: ${id}`} 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="editar usuario" onClick={handleModalEdit}>
                <EditIcon />
                </IconButton>
                <IconButton aria-label="remover usuario" onClick={handleModalConfirm}>
                <DeleteIcon />
                </IconButton>
            </CardActions>      
            </Card>
            <ModalConfirm 
                open={openModalConfirm}
                onClose={handleToggleOpenModalConfirm}
                onConfirm={() => handleConfirmModal(id)} 
                title='Deseja realmente excluir o usuário?'
                message={name}
            />
            <ModalEdit
                open={openModalEdit}
                onClose={handleToggleOpenModalEdit}
                onConfirm={handleEditModal}
                name={name}
                email={email}
                birthDate={birthDate} 
                id={id}           
            />
        </>
    )
}

export default UserCard
