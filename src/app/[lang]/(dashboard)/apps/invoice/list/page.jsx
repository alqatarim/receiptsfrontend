// Component Imports
import axios from 'axios'
import InvoiceList from '@views/apps/invoice/list'
import React from 'react'
import { getDictionary } from '@/utils/getDictionary'

const getInvoiceListData = async () => {
  // Vars
  const res = await axios.get(`${process.env.API_URL}/receipt/list`) // Replace '/api/data' with the URL of your backend API endpoint

  if (res.status < 200 || res.status >= 300) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.data
}

const getInvoiceListCardData = async () => {
  // Vars
  const res = await axios.get(`${process.env.API_URL}/receipt/listcard`) // Replace '/api/data' with the URL of your backend API endpoint

  if (res.status < 200 || res.status >= 300) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.data
}

const InvoiceApp = async ({ params }) => {


  const dictionary = await getDictionary(params.lang)



  const invoiceListCardData = await getInvoiceListCardData()
  const invoiceListData = await getInvoiceListData()




  return <InvoiceList listData={invoiceListData} cardData={invoiceListCardData} dictionary={dictionary} />
}

export default InvoiceApp
