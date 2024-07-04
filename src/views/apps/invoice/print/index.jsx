'use client'

import React, { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Logo from '@core/svg/Logo';
import themeConfig from '@configs/themeConfig';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import tableStyles from '@core/styles/table.module.css';

const styles = {
  a4Paper: {
    maxWidth: '100%', // Ensure the element doesn't exceed its parent's width
    aspectRatio: '210 / 297', // A4 aspect ratio (width / height)
    boxSizing: 'border-box',
    padding: '0.0in', // Add some padding for better visibility
  },
};

const PrintPage = ({ invoiceData, id }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setTimeout(() => {
        const printSettings = {
          margins: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          // Add any other print settings you need
        };

        window.print(printSettings);
      }, 100);
    }
  }, []);

  return (
    <Card style={styles.a4Paper}>
      <CardContent className='sm:!p-12'>
        <Grid container spacing={0}>
          <Grid item xs={12} className='sm:!p-3'>
            <div className='p-6 bg-actionHover rounded'>
              <div className='flex justify-between gap-y-4 flex-col sm:flex-row'>
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
                    <Typography color='text.primary'>{invoiceData.store_info.store_name}</Typography>
                    <Typography color='text.primary'>{`Phone: ${invoiceData.store_info.store_phone_number}`}</Typography>
                    <Typography color='text.primary'>{`Email: ${invoiceData.store_info.store_email}`}</Typography>
                    <Typography color='text.primary'>{`${invoiceData.store_info.store_district}, ${invoiceData.store_info.store_city}`}</Typography>
                    <Typography color='text.primary'>{`CR No: ${invoiceData.store_info.store_cr_number}, VAT No: ${invoiceData.store_info.store_vat_number}`}</Typography>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <Typography variant='h5'>{`Invoice No. ${id}`}</Typography>
                  <div className='flex flex-col gap-1'>
                    <Typography color='text.primary'>{`Date Issued: ${invoiceData.invoice_issued_date}`}</Typography>
                    <Typography color='text.primary'>{`Date Due: ${invoiceData.invoice_due_date}`}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className='sm:!p-3'>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Invoice To:
                  </Typography>
                  <div>
                    <Typography>
                      {`${invoiceData.customer_info.first_name} ${invoiceData.customer_info.last_name}`}
                    </Typography>
                    <Typography>{invoiceData.customer_info.phone_number}</Typography>
                    <Typography>{invoiceData.customer_info.email}</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Bill To:
                  </Typography>
                  <div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Total Due:</Typography>
                      <Typography>{`${invoiceData.balance < 0 ? 0 : Math.abs(invoiceData.balance)}
 `}
                        <span style={{ fontSize: '13px', fontStyle: 'italic' }}>
                          SAR
                        </span>
                      </Typography>


                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Bank name:</Typography>
                      <Typography>{invoiceData.store_info.store_billing_info.bank_name}</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Country:</Typography>
                      <Typography>{invoiceData.store_info.store_billing_info.country}</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>IBAN:</Typography>
                      <Typography>{invoiceData.store_info.store_billing_info.iban}</Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className='sm:!p-3'>
            <div className='overflow-x-auto border rounded'>
              <table className={tableStyles.table}>
                <thead>
                  <tr className='border-be'>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Name</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Desc</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Unit Price</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Discount</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Qty</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Refund</Typography>
                    </th>
                    <th className='!bg-transparent'>
                      <Typography variant="body2">Total (VAT incl.)</Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.name}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.description}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.unit_price}<span style={{ fontSize: '13px', fontStyle: 'italic' }}> SAR
                        </span> </Typography>

                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.discount_amount}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.quantity}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.refund_status}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary' variant="body2">{item.total}</Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item xs={12} className='sm:!p-3'>
            <div className='flex justify-between flex-col gap-y-4 sm:flex-row'>
              <div className='flex flex-col gap-1 order-2 sm:order-[unset]'>
                <div className='flex items-center gap-2'>
                  <Typography className='font-medium' color='text.primary'>
                    Salesperson:
                  </Typography>
                  <Typography>{invoiceData.store_info.salesperson_name}</Typography>
                </div>
                <Typography>Thanks for your business</Typography>
              </div>
              <div className='min-is-[200px]'>
                <div className='flex items-center justify-between'>
                  <Typography>Subtotal:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {`${invoiceData.calc_sub_total} `}
                    <span style={{ fontSize: '13px', fontStyle: 'italic' }}>
                      SAR
                    </span>
                  </Typography>
                </div>

                <div className='flex items-center justify-between'>
                  <Typography>Discount:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {`(${invoiceData.calc_discount_total}) `}
                    <span style={{ fontSize: '13px', fontStyle: 'italic' }}>
                      SAR
                    </span>
                  </Typography>
                </div>
                <div className='flex items-center justify-between'>
                  <Typography>VAT (15%):</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {`${invoiceData.calc_vat_total} `}
                    <span style={{ fontSize: '13px', fontStyle: 'italic' }}>
                      SAR
                    </span>
                  </Typography>
                </div>
                <Divider className='mlb-2' />
                <div className='flex items-center justify-between'>
                  <Typography>Total:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {`${invoiceData.calc_grand_total} `}
                    <span style={{ fontSize: '11px', fontStyle: 'italic' }}>
                      SAR
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <div className='min-is-[100px] max-is-[450px] align-left'>
              {/* <div className='grid grid-cols-2 gap-2' > */}
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px' }}>
                <div className='flex flex-col items-end min-is-[50px] max-is-[100px]'>
                  <Typography className='text-right'>Note:</Typography>
                </div>
                <div className='flex flex-col items-start'>
                  <Typography className='font-medium' color='tex  t.primary'>
                    {invoiceData.invoice_customer_notes[0]?.note}
                  </Typography>
                </div>

                <div className='flex flex-col items-end min-is-[50px] max-is-[100px]'>
                  <Typography className='text-right'>Note Date:</Typography>
                </div>
                <div className='flex flex-col items-start'>
                  <Typography className='font-medium' colo='text.primary'>
                    {invoiceData.invoice_customer_notes[0]?.note_date}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default PrintPage;
