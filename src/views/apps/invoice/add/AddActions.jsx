'use client'

// React Imports
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import Popover from '@mui/material/Popover'
import Switch from '@mui/material/Switch'
import InputLabel from '@mui/material/InputLabel'
import Divider from '@mui/material/Divider'
import ListItemButton from '@mui/material/ListItemButton'

// Component Imports
import AddPaymentDrawer from '@views/apps/invoice/shared/AddPaymentDrawer'
import SendInvoiceDrawer from '@views/apps/invoice/shared/SendInvoiceDrawer'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const AddActions = ({ invoiceData, onPaymentOptionChange }) => {
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [paymentTypes, setPaymentTypes] = useState([])
  const [paymentOptions, setPaymentOptions] = useState({})
  const [expandedType, setExpandedType] = useState(null)
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)

  const router = useRouter()
  const locale = router.locale

  const handlePaymentTypeToggle = type => {
    setPaymentTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]))
    if (!paymentOptions[type]) {
      setPaymentOptions(prev => ({ ...prev, [type]: [] }))
    }

    onPaymentOptionChange({ types: paymentTypes, options: paymentOptions })
  }

  const handlePaymentOptionToggle = (type, optionId) => {
    setPaymentOptions(prev => ({
      ...prev,
      [type]: prev[type]
        ? prev[type].includes(optionId)
          ? prev[type].filter(id => id !== optionId)
          : [...prev[type], optionId]
        : [optionId]
    }))

    onPaymentOptionChange({ types: paymentTypes, options: paymentOptions })
  }

  const previewUrl = locale ? getLocalizedUrl('apps/invoice/preview/4987', locale) : '#'

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent className='flex flex-col gap-4'>
            <Button
              fullWidth
              variant='contained'
              className='capitalize'
              startIcon={<i className='ri-send-plane-line' />}
              onClick={() => setSendDrawerOpen(true)}
            >
              Send Invoice
            </Button>
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='outlined'
              className='capitalize'
              href={previewUrl}
            >
              Preview
            </Button>
            <Button fullWidth color='secondary' variant='outlined' className='capitalize'>
              Save
            </Button>
            <Button
              fullWidth
              color='success'
              variant='contained'
              className='capitalize'
              onClick={() => setPaymentDrawerOpen(true)}
              startIcon={<i className='ri-money-dollar-circle-line' />}
            >
              Add Payment
            </Button>
          </CardContent>
        </Card>
        <AddPaymentDrawer open={paymentDrawerOpen} handleClose={() => setPaymentDrawerOpen(false)} />
        <SendInvoiceDrawer open={sendDrawerOpen} handleClose={() => setSendDrawerOpen(false)} />
      </Grid>
    </Grid>
  )
}

export default AddActions
