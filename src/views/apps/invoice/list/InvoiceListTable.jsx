'use client'

// React Imports
import React, { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import TablePagination from '@mui/material/TablePagination'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


// import dialog components
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import { DialogProps } from '@mui/material/Dialog'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

import "./list.css"

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)
  addMeta({
    itemRank
  })
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

const invoiceStatusObj = {
  Sent: { color: 'secondary', icon: 'ri-send-plane-2-line' },
  Paid: { color: 'success', icon: 'ri-check-line' },
  Draft: { color: 'primary', icon: 'ri-mail-line' },
  'Partial Payment': { color: 'warning', icon: 'ri-pie-chart-2-line' },
  'Past Due': { color: 'error', icon: 'ri-information-line' },
  Downloaded: { color: 'info', icon: 'ri-arrow-down-line' }
}

const refundStatusObj = {
  Expired: { color: 'secondary' },
  Valid: { color: 'success' },
  Refunded: { color: 'primary' },
  'Partial Payment': { color: 'warning' },
  'Past Due': { color: 'error' },
  Downloaded: { color: 'info' }
}

const columnHelper = createColumnHelper()

const InvoiceListTable = ({ invoiceData, dictionary }) => {
  const [status, setStatus] = useState('')
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(invoiceData)
  const [globalFilter, setGlobalFilter] = useState('')
  const [expandedRows, setExpandedRows] = useState({})
  const [expandedBalanceRows, setExpandedBalanceRows] = useState({})

  const { lang: locale } = useParams()

  const handleExpandRow = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId]
    }))
  }

  const handleExpandBalanceRow = (rowId) => {
    setExpandedBalanceRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId]
    }))
  }

  const handleActionClick = (event) => {
    event.stopPropagation()
  }

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
              onClick: handleActionClick
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
              onClick: handleActionClick
            }}
          />
        )
      },
      columnHelper.accessor('id', {
        header: '#',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`apps/invoice/preview/${row.original.invoice_id}`, locale)}
            color='primary'
            onClick={handleActionClick}
          >{`#${row.original.invoice_id}`}</Typography>
        )
      }),
      columnHelper.accessor('invoice_status', {
        header: dictionary['headers'].invoiceStatus,
        cell: ({ row }) => (
          <Tooltip
            {...{
              onClick: handleActionClick
            }}
            title={
              <div>
                <Typography variant='body2' component='span' className='text-inherit'>
                  {row.original.invoice_status}
                </Typography>
                <br />
                <Typography variant='body2' component='span' className='text-inherit'>
                  {dictionary.headers.balance}:
                </Typography>{' '}
                {row.original.balance < 0 ? `(${Math.abs(row.original.balance)}) ` : `${row.original.balance} `}
                <br />
                <Typography variant='body2' component='span' className='text-inherit'>
                  {dictionary.headers.dueDate}:
                </Typography>{' '}
                {row.original.invoice_due_date}
              </div>
            }
          >
            <CustomAvatar skin='light' color={invoiceStatusObj[`${row.original.invoice_status}`].color} size={28}>
              <i className={classnames('bs-4 is-4', invoiceStatusObj[`${row.original.invoice_status}`].icon)} />
            </CustomAvatar>
          </Tooltip>
        ),
        sortingFn: 'basic'
      }),
      columnHelper.accessor('name', {
        header: dictionary.headers.name,
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            {getAvatar({
              avatar: row.original.avatar,
              name: `${row.original.customer_info.first_name} ${row.original.customer_info.last_name}`
            })}
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.customer_info.first_name} {row.original.customer_info.last_name}
              </Typography>
              <Typography variant='body2'>{row.original.customer_info.phone_number}</Typography>
            </div>
          </div>
        ),
        sortingFn: (a, b, columnId) => {
          const nameA = a.original.customer_info.first_name + ' ' + a.original.customer_info.last_name || ''
          const nameB = b.original.customer_info.first_name + ' ' + b.original.customer_info.last_name || ''
          return nameA.localeCompare(nameB)
        }
      }),
      columnHelper.accessor('total', {
        header: dictionary.headers.total,
        cell: ({ row }) => (
          <Button
            variant='transparent'
            size='small'
            color='secondary'
            onClick={() => handleExpandRow(row.id)}
            endIcon={
              //CURRENT Classes override the rotate remove them and it will work fine :)
              <KeyboardArrowDownIcon
                className="icon-hover-rotate medium-icon"

              />
            }
          >
            <Typography color='text.primary'>
              {`${row.original.total} `}
              <span style={{ fontSize: '11px', fontStyle: 'italic' }}>SAR</span>
            </Typography>
          </Button>
        )
      })
      ,
      columnHelper.accessor('invoice_issued_date', {
        header: dictionary['headers'].issueddate,
        cell: ({ row }) => {
          const issued_date = new Date(row.original.invoice_issued_date)
          return <Typography>{issued_date.toLocaleDateString()}</Typography>
        },
        sortingFn: (a, b, columnId) => {
          const dateA = new Date(a.original[columnId])
          const dateB = new Date(b.original[columnId])
          return dateA - dateB
        }
      }),
      columnHelper.accessor('balance', {
        header: dictionary.headers.balance,
        cell: ({ row }) => (
          <Button
            variant='transparent'
            size='small'
            color='secondary'
            onClick={() => handleExpandBalanceRow(row.id)}
            endIcon={
              //CURRENT Classes override the rotate remove them and it will work fine :)
              <KeyboardArrowDownIcon
                className="icon-hover-rotate medium-icon"

              />
            }
          >
            {row.original.balance === 0 ? (
              <Chip label={dictionary.status.paid} color='success' size='small' variant='tonal' />
            ) : (
              <>
                <Typography color={row.original.balance < 0 ? 'error.light' : 'text.primary'} component='span'>
                  {row.original.balance < 0 ? `(${Math.abs(row.original.balance)}) ` : `${row.original.balance} `}

                  <span style={{ fontSize: '11px', fontStyle: 'italic', color: 'text.primary' }}>SAR</span>
                </Typography>
              </>
            )}
          </Button>
        )
      }),
      columnHelper.accessor('action', {
        header: dictionary.headers.action,
        cell: ({ row }) => (
          <div
            {...{
              onClick: handleActionClick
            }}
            className='flex items-center'>
            <IconButton onClick={handleActionClick}>
              <Link href={getLocalizedUrl(`apps/invoice/preview/${row.original.invoice_id}`, locale)} className='flex'>
                <i className='ri-eye-line text-[22px] text-textSecondary' />
              </Link>
            </IconButton>

            <OptionMenu
              iconClassName='text-[22px] text-textSecondary'
              options={[
                {
                  text: dictionary.actions.download,
                  icon: 'ri-download-line text-[22px]',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                },
                {
                  text: dictionary.actions.edit,
                  icon: 'ri-pencil-line text-[22px]',
                  href: getLocalizedUrl(`apps/invoice/edit/${row.original.invoice_id}`, locale),
                  linkProps: { className: 'flex items-center is-full plb-2 pli-4 gap-2 text-textSecondary' }
                },
                {
                  text: dictionary.actions.duplicate,
                  icon: 'ri-file-copy-line text-[22px]',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                }
              ]}
              onClick={handleActionClick}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    [dictionary, locale, expandedRows, expandedBalanceRows]
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  const getAvatar = params => {
    const { avatar, name } = params

    if (avatar) {
      return <CustomAvatar src={avatar} skin='light' size={34} />
    } else {
      return (
        <CustomAvatar skin='light' size={34}>
          {getInitials(name)}
        </CustomAvatar>
      )
    }
  }

  useEffect(() => {
    const filteredData = invoiceData?.filter(invoice => {
      if (status && invoice.invoice_status.toLowerCase().replace(/\s+/g, '-') !== status) return false
      return true
    })

    setData(filteredData)
  }, [status, invoiceData, setData])

  return (
    <Card>
      <CardContent className='flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center'>
        <Button
          variant='contained'
          component={Link}
          startIcon={<i className='ri-add-line' />}
          href={getLocalizedUrl('apps/invoice/add/1', locale)} //  replace with actual company id
          className='is-full sm:is-auto'
        >
          {dictionary.actions.createInvoice}
        </Button>


        <div className='flex flex-col sm:flex-row is-full sm:is-auto items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder={dictionary.placeholders.searchInvoice}
            className='is-full sm:is-auto min-is-[200px]'
          />
          <FormControl fullWidth size='small' className='min-is-[175px]'>
            <InputLabel id='status-select'>{dictionary.headers.invoiceStatus}</InputLabel>
            <Select
              fullWidth
              id='select-status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              label={dictionary.headers.invoiceStatus}
              labelId='status-select'
            >
              <MenuItem value=''>{dictionary.placeholders.none}</MenuItem>
              <MenuItem value='downloaded'>{dictionary.status.downloaded}</MenuItem>
              <MenuItem value='draft'>{dictionary.status.draft}</MenuItem>
              <MenuItem value='paid'>{dictionary.status.paid}</MenuItem>
              <MenuItem value='partial-payment'>{dictionary.status.partialPayment}</MenuItem>
              <MenuItem value='past-due'>{dictionary.status.pastDue}</MenuItem>
              <MenuItem value='sent'>{dictionary.status.sent}</MenuItem>
            </Select>
          </FormControl>
        </div>
      </CardContent>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className='ri-arrow-up-s-line text-xl' />,
                          desc: <i className='ri-arrow-down-s-line text-xl' />
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  {dictionary.placeholders.noDataAvailable}
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => (
                  <React.Fragment key={row.id}>
                    <tr
                      className={classnames({ selected: row.getIsSelected() })}
                      style={{ cursor: 'pointer' }}
                    >
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>

                    <TableRow>
                      <TableCell
                        style={{
                          height: expandedRows[row.id] ? 'auto' : 0,
                          padding: expandedRows[row.id] ? '16px' : '0px',
                          overflow: 'hidden',
                          transition: 'height 1.00s ease, padding 1.50s ease',
                        }}
                        colSpan={table.getVisibleFlatColumns().length}
                      >
                        <Collapse in={expandedRows[row.id]} timeout="auto" unmountOnExit>
                          <Box sx={{ marginTop: 0, padding: '0px' }}>
                            <Typography
                              className='vertically-centered'
                              variant="h6"
                              gutterBottom
                              component="div"
                              style={{
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              {dictionary.headers.purchases}
                            </Typography>
                            <Table
                              size="small"
                              aria-label="purchases"
                              style={{
                                width: '70%',
                              }}
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.name}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.description}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.unitPrice}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.qty}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.subtotal}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.discount}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.vat}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.total}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.refund}</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {row.original.items.map(item => (
                                  <TableRow key={item._id} style={{ borderBottom: '0px solid white' }}>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.name}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.description}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.unit_price}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.quantity}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.sub_total}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.discount_amount}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.vat_amount}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{item.total}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>
                                      {item.refund_status == 'Valid' ? (
                                        <Chip label={dictionary.status.valid} color='success' size='small' variant='tonal' />
                                      ) : item.refund_status == 'Refunded' ? (
                                        <Chip label={dictionary.status.refunded} color='error' size='small' variant='tonal' />
                                      ) : (
                                        <Chip label={dictionary.status.expired} color='default' size='small' variant='tonal' />
                                      )}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        style={{
                          height: expandedBalanceRows[row.id] ? 'auto' : 0,
                          padding: expandedBalanceRows[row.id] ? '16px' : '0px',
                          overflow: 'hidden',
                          transition: 'height 1.00s ease, padding 1.50s ease',
                        }}
                        colSpan={table.getVisibleFlatColumns().length}
                      >
                        <Collapse in={expandedBalanceRows[row.id]} timeout="auto" unmountOnExit>
                          <Box sx={{ marginTop: 0, padding: '0px' }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              component="div"
                              style={{
                                height: '30px',
                                marginLeft: 'auto',
                                width: '70%',
                                textAlign: 'left'
                              }}
                            >
                              {dictionary.headers.payments}
                            </Typography>
                            <Table
                              size="small"
                              aria-label="purchases"
                              style={{
                                width: '70%',
                                marginLeft: 'auto',
                              }}
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.payment_id}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.payment_date}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.payment_due_date}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.amount_paid}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.payment_method}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.transaction_id}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.bank_name}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.account_name}</TableCell>
                                  <TableCell style={{ backgroundColor: 'transparent', fontSize: '12px' }}>{dictionary.headers.iban}</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {row.original.payments.map(payment => (
                                  <TableRow key={payment._id} style={{ borderBottom: '0px solid white' }}>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_id}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_date}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_due_date}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.amount_paid}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_method.payment_option}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_method.transaction_id}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_method.bank_name}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_method.account_name}</TableCell>
                                    <TableCell style={{ fontSize: '14px', borderBottom: '0px solid white' }}>{payment.payment_method.iban}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>

                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component='div'
        className='border-bs'
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default InvoiceListTable
