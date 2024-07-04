// Next Imports
import { redirect } from 'next/navigation'
import axios from 'axios'
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import EditCard from '@views/apps/invoice/edit/EditCard'
import EditActions from '@views/apps/invoice/edit/EditActions'


const getData = async (companyId) => {
  // Vars
  const res = await axios.get(`${process.env.API_URL}/receipt/draft/${comapnyId}`)


  if (res.status < 200 || res.status >= 300) {

    throw new Error('Failed to fetch invoice data')

  }

  return res.data


}

const EditPage = async ({ params }) => {
  // Vars
  const data = await getData(params.id)

  const filteredData = data


  if (!filteredData) {
    redirect('/not-found')
  }

  return filteredData ? (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <EditCard data={data} invoiceData={filteredData} id={params.id} />
      </Grid>
      <Grid item xs={12} md={3}>
        <EditActions id={params.id} />
      </Grid>
    </Grid>
  ) : null
}

export default EditPage
