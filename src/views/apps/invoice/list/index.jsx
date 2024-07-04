

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import InvoiceListTable from './InvoiceListTable'
import InvoiceCard from './InvoiceCard'





const InvoiceList = async ({ listData, cardData, dictionary }) => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceCard invoiceData={cardData} dictionary={dictionary} />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable invoiceData={listData} dictionary={dictionary} />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
