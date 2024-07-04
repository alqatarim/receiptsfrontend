// Next Imports
import { redirect } from 'next/navigation'
import axios from 'axios'

// Component Imports
import PrintPage from '@views/apps/invoice/print'

const getData = async (receiptId) => {

  const res = await axios.get(`${process.env.API_URL}/receipt/details/${receiptId}`)

  console.log(JSON.stringify(res.data))


  if (res.status < 200 || res.status >= 300) {

    throw new Error('Failed to fetch invoice data')
  }

  return res.data
}

const InvoicePrint = async ({ params }) => {

  // Vars

  const data = await getData(params.id)

  const filteredData = data.filter(invoice => invoice.invoice_id == params.id)[0]


  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? <PrintPage invoiceData={filteredData} id={params.id} /> : null
}

export default InvoicePrint
