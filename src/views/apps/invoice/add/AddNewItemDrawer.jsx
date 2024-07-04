'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Vars
export const initialFormItemData = {
  name: '',
  description: '',
  unit_price: ''
}

const AddNewItemDrawer = ({ open, setNewItemOpen, onFormSubmit }) => {
  // States
  const [data, setData] = useState(initialFormItemData)

  const handleSubmit = e => {
    e.preventDefault()
    setNewItemOpen(false)
    onFormSubmit(data)
    handleReset()
  }

  const handleReset = () => {
    setNewItemOpen(false)
    setData(initialFormItemData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-[15px]'>
        <Typography variant='h6'>Add New Item</Typography>
        <IconButton onClick={handleReset}>
          <i className='ri-close-line' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col gap-5'>
          <TextField
            fullWidth
            id='name'
            label='Item Name'
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <TextField
            fullWidth
            id='description'
            label='Item Description'
            value={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
          />
          <TextField
            fullWidth
            id='unit_price'
            type='number'
            label='Unit Price'
            value={data.unit_price}
            onChange={e => setData({ ...data, unit_price: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Add
            </Button>
            <Button variant='outlined' color='secondary' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddNewItemDrawer
