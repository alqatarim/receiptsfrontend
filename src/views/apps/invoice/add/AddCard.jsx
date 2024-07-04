'use client'

// React Imports
import React from 'react'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormControl from '@mui/material/FormControl'
import classnames from 'classnames'
import Collapse from '@mui/material/Collapse'
import Popover from '@mui/material/Popover'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import ListItemButton from '@mui/material/ListItemButton'
import Switch from '@mui/material/Switch'

// Component Imports
import AddCustomerDrawer, { initialFormData } from './AddCustomerDrawer'
import AddNewItemDrawer, { initialFormItemData } from './AddNewItemDrawer'
import Logo from '@core/svg/Logo'
import themeConfig from '@configs/themeConfig'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import { size } from '@floating-ui/react'
import Input from '@mui/material/Input'

const AddCard = ({ invoiceData, dictionary }) => {
  const [open, setOpen] = useState(false)
  const [newItemOpen, setNewItemOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [selectData, setSelectData] = useState(null)
  const [itemsData, setItemsData] = useState([
    {
      name: '',
      description: '',
      unit_sub_total: '',
      quantity: '',
      sub_total: '',
      item_tax: '',
      total_tax: '',
      discount: '',
      total: ''
    }
  ])
  const [issuedDate, setIssuedDate] = useState(null)
  const [dueDate, setDueDate] = useState(null)
  const [formData, setFormData] = useState(initialFormData)
  const isBelowMdScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))

  // Payment options state
  const [paymentTypes, setPaymentTypes] = useState([])
  const [paymentOptions, setPaymentOptions] = useState({})
  const [expandedType, setExpandedType] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const openPopover = Boolean(anchorEl)

  const handleChangeParent = type => {
    const isChecked = paymentTypes.includes(type)
    const allSubItems = invoiceData[0].payment_options[type].map(option => option._id)
    setPaymentTypes(prev => (isChecked ? prev.filter(t => t !== type) : [...prev, type]))
    setPaymentOptions(prev => ({
      ...prev,
      [type]: isChecked ? [] : allSubItems
    }))
  }

  const handleChangeChild = (type, optionId) => {
    setPaymentOptions(prev => {
      const newOptions = (prev[type] || []).includes(optionId)
        ? (prev[type] || []).filter(id => id !== optionId)
        : [...(prev[type] || []), optionId]

      const newPaymentTypes =
        newOptions.length === 0
          ? paymentTypes.filter(t => t !== type)
          : paymentTypes.includes(type)
            ? paymentTypes
            : [...paymentTypes, type]

      setPaymentTypes(newPaymentTypes)

      return {
        ...prev,
        [type]: newOptions
      }
    })
  }

  const renderPaymentDetails = () => {
    return paymentTypes.map(type => (
      <div key={type} container fullWidth className='flex flex-col gap-1 p-2 mb-4'>
        <div className='flex n  p-1.5 border-b'>
          <Typography className='font-small' align='center'>
            {type.replace('_', ' ').toUpperCase()}
          </Typography>
        </div>
        {Array.isArray(invoiceData[0].payment_options[type]) &&
          invoiceData[0].payment_options[type].length > 0 &&
          paymentOptions[type].map(optionId => {
            const optionDetails = invoiceData[0].payment_options[type].find(option => option._id === optionId)
            return (
              <div key={optionId} className='flex flex-row justify-evenly gap-2 p-1  '>
                <Grid className='flex flex-wrap flex-col justify-evenly'>
                  {optionDetails && optionDetails.bank_name && (
                    <Grid item xs='auto'>
                      <Typography className='font-small'>Bank:</Typography>
                    </Grid>
                  )}
                  {optionDetails && optionDetails.account_name && (
                    <Grid item xs='auto'>
                      <Typography className='font-small'>Account Name:</Typography>
                    </Grid>
                  )}
                  {optionDetails && optionDetails.iban && (
                    <Grid item xs='auto'>
                      <Typography className='font-small'>IBAN:</Typography>
                    </Grid>
                  )}
                </Grid>

                <Grid className='flex flex-col flex-wrap justify-evenly'>
                  {optionDetails && optionDetails.bank_name && (
                    <Grid item xs='auto'>
                      <Typography className='flex font-small'>{optionDetails.bank_name}</Typography>
                    </Grid>
                  )}
                  {optionDetails && optionDetails.account_name && (
                    <Grid item xs='auto'>
                      <Typography className='flex font-small'>{optionDetails.account_name}</Typography>
                    </Grid>
                  )}
                  {optionDetails && optionDetails.iban && (
                    <Grid item xs='auto'>
                      <Typography className='flex font-small'>{optionDetails.iban}</Typography>
                    </Grid>
                  )}
                </Grid>
              </div>
            )
          })}
      </div>
    ))
  }

  const onFormSubmit = data => {
    setFormData(data)
  }

  const deleteForm = index => {
    setItemsData(itemsData.filter((_, i) => i !== index))
  }

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...itemsData]

    if (field === 'name') {
      const selectedItem = invoiceData[0].items.find(item => item.name === value)
      updatedItems[index] = {
        ...updatedItems[index],
        name: value,
        description: selectedItem ? selectedItem.description : '',
        quantity: selectedItem ? 1 : '',
        unit_sub_total: selectedItem ? selectedItem.unit_sub_total : '',
        sub_total: selectedItem ? selectedItem.unit_sub_total.toFixed(2) : '',
        item_tax: selectedItem ? (selectedItem.unit_sub_total * 0.15).toFixed(2) : '',
        discount: '',
        total: ''
      }
    } else {
      updatedItems[index][field] = value

      if (field === 'unit_sub_total' || field === 'quantity') {
        const quantity = updatedItems[index].quantity || 0
        const unitPrice = updatedItems[index].unit_sub_total || 0
        updatedItems[index].sub_total = (quantity * unitPrice).toFixed(2)
      }
    }
    const grandTotal = updatedItems.reduce((acc, item) => acc + parseFloat(item.sub_total || 0), 0)
    const totalTax = (grandTotal * 0.15).toFixed(2)

    updatedItems.forEach((item, idx) => {
      updatedItems[idx].item_tax = totalTax
    })
    setItemsData(updatedItems)
  }

  const addItem = () => {
    setItemsData([...itemsData, { name: '', unit_sub_total: '', quantity: '', sub_total: '' }])
    setCount(count + 1)
  }

  return (
    <>
      <Card>
        <CardContent className='sm:!p-12'>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className='p-6 bg-actionHover rounded'>
                <div className='flex justify-between gap-4 flex-col sm:flex-row'>
                  <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-2.5'>
                      <Logo className='text-primary' height={25} width={30} />
                      <Typography
                        className='uppercase font-semibold text-xl leading-tight tracking-[0.15px]'
                        color='text.primary'
                      >
                        {themeConfig.templateName}
                      </Typography>
                    </div>
                    <div>
                      <Typography color='text.primary'>{invoiceData[0].store_name}</Typography>
                      <Typography color='text.primary'>{`Phone: ${invoiceData[0].store_phone_number}`}</Typography>
                      <Typography color='text.primary'>{`Email: ${invoiceData[0].store_email}`}</Typography>
                      <Typography color='text.primary'>{`${invoiceData[0].store_district}, ${invoiceData[0].store_city}`}</Typography>
                      <Typography color='text.primary'>{`CR No: ${invoiceData[0].store_cr_number}, VAT No: ${invoiceData[0].store_vat_number}`}</Typography>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                      <Typography variant='h5' className='min-is-[95px]'>
                        Invoice
                      </Typography>
                      <TextField
                        fullWidth
                        size='small'
                        value={''}
                        InputProps={{
                          disabled: true,
                          startAdornment: <InputAdornment position='start'>#</InputAdornment>
                        }}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[95px] mie-4' color='text.primary'>
                        Date Issued:
                      </Typography>
                      <AppReactDatepicker
                        boxProps={{ className: 'is-full' }}
                        selected={issuedDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={date => setIssuedDate(date)}
                        customInput={<TextField fullWidth size='small' />}
                      />
                    </div>
                    <div className='flex items-center'>
                      <Typography className='min-is-[95px] mie-4' color='text.primary'>
                        Date Due:
                      </Typography>
                      <AppReactDatepicker
                        boxProps={{ className: 'is-full' }}
                        selected={dueDate}
                        placeholderText='YYYY-MM-DD'
                        dateFormat={'yyyy-MM-dd'}
                        onChange={date => setDueDate(date)}
                        customInput={<TextField fullWidth size='small' />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div fullWidth className='flex flex-col sm:flex-row md:flex-row justify-between gap-1'>
                <div className='flex flex-col gap-4'>
                  <div className='justify-start'>
                    <FormControl className='justify-start'>
                      <InputLabel id='demo-basic-select-outlined-label' size='small'>
                        Bill To
                      </InputLabel>
                      <Select
                        className={classnames('min-is-[250px]', { 'is-1/2': isBelowSmScreen })}
                        label='Bill To'
                        size='small'
                        defaultValue=''
                        value={selectData?.customer_id || ''}
                        id='demo-basic-select-outlined'
                        labelId='demo-basic-select-outlined-label'
                        onChange={e => {
                          setFormData({})
                          setSelectData(
                            invoiceData[0].customer_info
                              .slice(0, 5)
                              .filter(item => item.customer_id == e.target.value)[0]
                          )
                        }}
                      >
                        <MenuItem
                          className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                          value=''
                          onClick={() => {
                            setSelectData(null)
                            setOpen(true)
                          }}
                        >
                          <i className='ri-add-line' /> Add New Customer
                        </MenuItem>
                        {invoiceData[0].customer_info.slice(0, 5).map((invoice, index) => (
                          <MenuItem key={index} value={invoice.customer_id}>
                            {invoice.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className='flex justify-start'>
                    {selectData?.customer_id ? (
                      <div className='w-full mt-2'>
                        <Typography>{selectData?.name}</Typography>
                        <Typography>{selectData?.store_name}</Typography>
                        <Typography>{selectData?.phone_number}</Typography>
                        <Typography>{selectData?.email}</Typography>
                      </div>
                    ) : (
                      <div className='w-full mt-2'>
                        <Typography>{selectData?.name}</Typography>
                        <Typography>{selectData?.store_name}</Typography>
                        <Typography>{selectData?.phone_number}</Typography>
                        <Typography>{selectData?.email}</Typography>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex flex-col  gap-1 '>
                  <FormControl className='self-end min-is-[200px]'>
                    <InputLabel id='payment-options-label' size='small'>
                      Payment Options
                    </InputLabel>
                    <Select
                      label='Payment Options'
                      size='small'
                      defaultValue='Payment Options'
                      value='Payment Options'
                      id='payment-options-select'
                      labelId='payment-options-label'
                      onChange={e => {
                        setExpandedType(expandedType === e.target.value ? null : e.target.value)
                      }}
                    >
                      {Object.keys(invoiceData[0].payment_options).map(type => (
                        <MenuItem className='flex flex-col' key={type} value={type}>
                          <div className='flex items-center'>
                            <Checkbox
                              checked={paymentTypes.includes(type)}
                              indeterminate={
                                paymentOptions[type]?.length > 0 &&
                                paymentOptions[type]?.length < invoiceData[0].payment_options[type].length
                              }
                              onChange={() => handleChangeParent(type)}
                            />
                            <ListItemButton
                              onClick={() => setExpandedType(expandedType === type ? null : type)}
                              style={{ padding: '5px 5px 5px 5px' }}
                            >
                              <ListItemText primary={type.replace('_', ' ').toUpperCase()} />
                              <i className={expandedType ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} />
                            </ListItemButton>
                          </div>
                          <Collapse in={expandedType === type} timeout='auto' unmountOnExit>
                            <List disablePadding component='div'>
                              {Array.isArray(invoiceData[0].payment_options[type]) &&
                                invoiceData[0].payment_options[type].map(option => (
                                  <ListItemButton key={option._id}>
                                    <ListItem
                                      disablePadding
                                      className='gap-2 p-0 m-0'
                                      onClick={e => {
                                        e.stopPropagation() // Prevent the click from propagating to ListItemButton
                                        handleChangeChild(type, option._id)
                                      }}
                                    >
                                      <Checkbox
                                        className='pis-1 p-0 m-0'
                                        checked={(paymentOptions[type] || []).includes(option._id)}
                                      />
                                      <ListItemText
                                        primaryTypographyProps={{ fontSize: 'small' }}
                                        primary={option.account_name}
                                      />
                                    </ListItem>
                                  </ListItemButton>
                                ))}
                              <Divider className='m-0' />
                            </List>
                          </Collapse>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>


                  <div className='flex flex-wrap justify-end'>{renderPaymentDetails()}</div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Divider className='border-dashed' />
            </Grid>

            <Grid item xs={12}>
              <Button
                size='small'
                variant='contained'
                onClick={addItem}
                startIcon={<i className='ri-add-line' />}
                className='mb-5'
              >
                Add Item
              </Button>
            </Grid>

            {itemsData.map((item, index) => (
              <div
                key={index}
                className={classnames('repeater-item flex relative mbe-0.5', {
                  'mbs-2': !isBelowMdScreen,
                  '!mbs-2': index !== 0 && !isBelowMdScreen,
                  'gap-2': isBelowMdScreen
                })}
              >
                <Grid container columnSpacing={2} className='p-10 m-0 pbe-10 sm:!p-0'>
                  <Grid item lg={2.75} md={2.75} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='demo-basic-select-outlined-label'
                        size='small'
                        sx={{ fontSize: '0.825rem', size: 'small' }}
                      >
                        Item
                      </InputLabel>

                      <Select
                        label='Item'
                        id='demo-basic-select-outlined'
                        labelId='demo-basic-select-outlined-label'
                        size='small'
                        fullWidth
                        value={item.name}
                        onChange={e => handleItemChange(index, 'name', e.target.value)}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              '& .MuiMenuItem-root': {
                                sx: {
                                  fontSize: '0.8rem',
                                  lineHeight: '1.3em'
                                }
                              }
                            }
                          }
                        }}
                        sx={{
                          fontSize: '0.8rem',
                          '& .MuiSelect-select': {
                            pl: 2,
                            pr: 2,
                            fontSize: '0.8rem',
                            minHeight: '1.25em',
                            lineHeight: '1.3em'
                          }
                        }}
                      >
                        <MenuItem
                          className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                          value=''
                          onClick={() => setNewItemOpen(true)}
                          sx={{ fontSize: '0.825rem' }}
                        >
                          <i className='ri-add-line' /> Add a new Item
                        </MenuItem>
                        {invoiceData[0].items.map((invoiceItem, itemIndex) => (
                          <MenuItem key={itemIndex} value={invoiceItem.name} sx={{ fontSize: '0.825rem' }} fullWidth>
                            {invoiceItem.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item lg={4.5} md={4.5} xs={12}>
                    <TextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      fullWidth
                      id='outlined-basic'
                      label='Description'
                      size='small'
                      type='text'
                      value={item.description || ''}
                      onChange={e => handleItemChange(index, 'description', e.target.value)}
                      inputProps={{
                        sx: {
                          fontSize: '0.8rem',
                          height: '1.3em',
                          lineHeight: '1.3em',
                          pl: 2,
                          pr: 2
                        }
                      }}
                      InputLabelProps={{
                        sx: {
                          fontSize: '0.8rem'
                        }
                      }}
                    >
                      {item.description}
                    </TextField>
                  </Grid>
                  <Grid item lg={1.6} md={1.6} xs={12}>
                    <TextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      id='outlined-basic'
                      label='Unit Price'
                      size='small'
                      type='number'
                      fullWidth
                      value={item.unit_sub_total}
                      onChange={e => handleItemChange(index, 'unit_sub_total', e.target.value)}
                      inputProps={{
                        min: 0,
                        sx: { pl: 2, pr: 2, fontSize: '0.8rem' }
                      }}
                      InputLabelProps={{
                        sx: { fontSize: '0.8rem' }
                      }}
                    />
                  </Grid>
                  <Grid item lg={1.5} md={1.5} xs={12}>
                    <TextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      fullWidth
                      id='outlined-basic'
                      label='Qty'
                      size='small'
                      type='number'
                      value={item.quantity || ''}
                      onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                      sx={{}}
                      inputProps={{
                        min: 0,
                        sx: { pl: 2, pr: 2, fontSize: '0.825rem' }
                      }}
                      InputLabelProps={{
                        sx: { fontSize: '0.825rem' }
                      }}
                    />
                  </Grid>
                  <Grid item lg={1.5} md={1.5} xs={12}>
                    <TextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      fullWidth
                      id='outlined-basic'
                      label='Price'
                      size='small'
                      type='text'
                      value={item.sub_total}
                      inputProps={{
                        min: 0,
                        sx: { pl: 2, pr: 2, fontSize: '0.825rem' }
                      }}
                      InputLabelProps={{
                        sx: { fontSize: '0.825rem' }
                      }}
                    />
                  </Grid>
                </Grid>

                <div className='flex flex-col justify-start'>
                  <IconButton
                    size='small'
                    onClick={() => deleteForm(index)}
                    className='transform transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-red-600'
                  >
                    <i size='small' className='ri-close-line' />
                  </IconButton>
                </div>
              </div>
            ))}

            <Grid item xs={12}></Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <div className='flex justify-between flex-col gap-4 sm:flex-row'>
              <div className='flex flex-col gap-4 order-2 sm:order-[unset]'>
                <div className='flex items-center gap-2'>
                  <Typography className='font-medium' color='text.primary'>
                    Salesperson:
                  </Typography>
                  <TextField size='small' defaultValue='Tommy Shelby' />
                </div>
                <TextField size='small' placeholder='Thanks for your business' />
              </div>
              <div className='min-is-[200px]'>
                <div className='flex items-center justify-between'>
                  <Typography>Subtotal:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    ${itemsData.reduce((acc, item) => acc + parseFloat(item.sub_total / 1.15 || 0), 0).toFixed(2)}
                  </Typography>
                </div>
                <div className='flex items-center justify-between'>
                  <Typography>Discount:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    $28
                  </Typography>
                </div>
                <div className='flex items-center justify-between'>
                  <Typography>Tax:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {(itemsData.reduce((acc, item) => acc + parseFloat(item.sub_total || 0), 0) * 0.15).toFixed(2)}
                  </Typography>
                </div>
                <Divider className='mlb-2' />
                <div className='flex items-center justify-between'>
                  <Typography>Total:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    ${itemsData.reduce((acc, item) => acc + parseFloat(item.sub_total || 0), 0).toFixed(2)}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='invoice-note' className='inline-flex mbe-1 text-textPrimary'>
              Note:
            </InputLabel>
            <TextField
              id='invoice-note'
              rows={2}
              fullWidth
              multiline
              className='border rounded'
              defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
            />
          </Grid>
        </CardContent>
      </Card>
      <AddCustomerDrawer open={open} setOpen={setOpen} onFormSubmit={onFormSubmit} />
      <AddNewItemDrawer open={newItemOpen} setNewItemOpen={setNewItemOpen} onFormSubmit={onFormSubmit} />
    </>
  )
}

export default AddCard
