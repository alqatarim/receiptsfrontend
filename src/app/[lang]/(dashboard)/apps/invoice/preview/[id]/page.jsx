// Next Imports
import { redirect } from 'next/navigation'
import axios from 'axios'
// Component Imports
import Preview from '@views/apps/invoice/preview'

const getData = async (receiptId) => {
  // Vars
  const res = await axios.get(`${process.env.API_URL}/receipt/details/${receiptId}`)

  // console.log(JSON.stringify(res.data))

  if (res.status < 200 || res.status >= 300) {

    throw new Error('Failed to fetch invoice data')
  }


  // return JSON.stringify(res.data)
  return res.data


}

const PreviewPage = async ({ params }) => {
  // Vars


  const data = await getData(params.id)

  const filteredData = data.filter(invoice => invoice.invoice_id == params.id)[0]





  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? <Preview invoiceData={filteredData} id={params.id} /> : null
}

export default PreviewPage
