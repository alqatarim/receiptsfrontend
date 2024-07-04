'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddCard from '@views/apps/invoice/add/AddCard'
import AddActions from '@views/apps/invoice/add/AddActions'

const InvoiceAddClient = ({ dictionary, invoiceData }) => {
  const [paymentOption, setPaymentOption] = useState({ types: [], options: {} })

  const handlePaymentOptionChange = value => {
    setPaymentOption(value)
    console.log('Updated Payment Option in Client:', value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <AddCard
          invoiceData={invoiceData}
          dictionary={dictionary}
          paymentOption={paymentOption}
          paymentOptions={paymentOption.options}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <AddActions invoiceData={invoiceData} onPaymentOptionChange={handlePaymentOptionChange} />
      </Grid>
    </Grid>
  )
}

export default InvoiceAddClient
