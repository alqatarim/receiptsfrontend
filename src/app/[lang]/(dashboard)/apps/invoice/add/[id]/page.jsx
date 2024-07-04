// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import axios from 'axios'
import React from 'react'
import { getDictionary } from '@/utils/getDictionary'

import InvoiceAddClient from './clientsidePage'

const getData = async companyId => {
  const res = await axios.get(`${process.env.API_URL}/receipt/draft/${companyId}`)
  if (res.status < 200 || res.status >= 300) {
    throw new Error('Failed to fetch invoice data')
  }
  return res.data
}

const InvoiceAdd = async ({ params }) => {
  const dictionary = await getDictionary(params.lang)
  const data = await getData(params.id)

  return <InvoiceAddClient dictionary={dictionary} invoiceData={data} />
}

export default InvoiceAdd
