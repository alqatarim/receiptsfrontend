// import React, { useState } from 'react'
// import { FormControl, InputLabel, Select, MenuItem, Chip, ListItemText, Checkbox, IconButton } from '@mui/material'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import ExpandLessIcon from '@mui/icons-material/ExpandLess'

// const NestedSelect = ({ invoiceData }) => {
//   const [paymentTypes, setPaymentTypes] = useState([])
//   const [expandedType, setExpandedType] = useState(null)
//   const [selectedOptions, setSelectedOptions] = useState({})

//   const handlePaymentTypeChange = event => {
//     setExpandedType(event.target.value)
//   }

//   const handleOptionToggle = (type, optionId) => {
//     setSelectedOptions(prev => {
//       const selected = prev[type] || []
//       const newSelected = selected.includes(optionId) ? selected.filter(id => id !== optionId) : [...selected, optionId]
//       return { ...prev, [type]: newSelected }
//     })
//   }

//   const renderValue = selected => (
//     <div className='flex flex-wrap gap-1'>
//       {Object.entries(selectedOptions).map(([type, options]) =>
//         options.map(optionId => {
//           const option = invoiceData[0].payment_options[type].find(opt => opt._id === optionId)
//           return <Chip key={optionId} label={option?.account_name} size='small' />
//         })
//       )}
//     </div>
//   )

//   return (
//     <FormControl fullWidth className='mbe-4'>
//       <InputLabel id='payment-type-select'>Accept payments via</InputLabel>
//       <Select
//         multiple
//         fullWidth
//         value={paymentTypes}
//         onChange={handlePaymentTypeChange}
//         label='Accept payments via'
//         labelId='payment-type-select'
//         renderValue={renderValue}
//       >
//         {Object.keys(invoiceData[0].payment_options).map(type => (
//           <MenuItem key={type} value={type}>
//             <ListItemText primary={type.replace('_', ' ').toUpperCase()} />
//             {expandedType === type ? (
//               <ExpandLessIcon onClick={() => setExpandedType(null)} />
//             ) : (
//               <ExpandMoreIcon onClick={() => setExpandedType(type)} />
//             )}
//           </MenuItem>
//         ))}
//         {expandedType &&
//           invoiceData[0].payment_options[expandedType].map(option => (
//             <MenuItem
//               key={option._id}
//               value={option._id}
//               style={{ paddingLeft: 32 }}
//               onClick={() => handleOptionToggle(expandedType, option._id)}
//             >
//               <Checkbox checked={selectedOptions[expandedType]?.includes(option._id) || false} />
//               <ListItemText primary={option.account_name} />
//             </MenuItem>
//           ))}
//       </Select>
//     </FormControl>
//   )
// }

// export default NestedSelect
