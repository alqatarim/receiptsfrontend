'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

import { Icon } from '@iconify/react';
// import { iconify-icon } from '@iconify-icons/solid/eye';


// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Data
const data = [
  {
    title: 24,
    subtitle: 'Clients',
    icon: 'ri-user-3-line',
    textcolor: 'success'
  },
  {
    title: 165,
    subtitle: 'Invoices',
    icon: 'ri-pages-line',
    textcolor: 'error'
  },
  {
    title: '246 SAR',
    subtitle: 'Paid',
    icon: 'ri-wallet-line',
    textcolor: 'primary'
  },
  {
    title: '26 SAR',
    subtitle: 'Unpaid',
    icon: 'ri-hand-coin-line',
    textcolor: 'warning'
  }
]

const InvoiceCard = ({ invoiceData = data, dictionary }) => {
  // Hooks
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // Map custom textcolor values to MUI theme colors
  const getThemeColor = (color) => {
    switch (color) {
      case 'success':
        return theme.palette.success.main
      case 'error':
        return theme.palette.error.main
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'warning':
        return theme.palette.warning.main
      case 'info':
        return theme.palette.info.main
      case 'common':
        return theme.palette.text.primary
      default:
        return theme.palette.text.primary

    }
  }

  // Custom animated number component
  const AnimatedNumber = ({ value, color }) => {
    const numericValue = parseFloat(String(value).replace(/[^\d.]/g, ''))
    const isSAR = typeof value === 'string' && value.includes('SAR')
    const spanRef = useRef(null)
    const [defaultColor, setDefaultColor] = useState('#000')

    useEffect(() => {
      if (spanRef.current) {
        const computedStyle = getComputedStyle(spanRef.current)
        setDefaultColor(computedStyle.color)
      }
    }, [])

    const { number, textColor } = useSpring({
      from: { number: 0, textColor: defaultColor },
      number: numericValue,
      textColor: getThemeColor(color),
      delay: 200,
      config: { mass: 1, tension: 300, friction: 100 }
    })

    return (
      <animated.span ref={spanRef} style={{ color: textColor }}>
        {number.to(n => isSAR ? `${n.toFixed(0)} SAR` : Math.floor(n))}
      </animated.span>
    )
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          {invoiceData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              className='sm:[&:nth-of-type(odd)>div]:pie-6 sm:[&:nth-of-type(odd)>div]:border-ie md:[&:not(:last-child)>div]:pie-6 md:[&:not(:last-child)>div]:border-ie'
            >
              <div className='flex justify-between'>
                <div className='flex flex-col' color='error'>
                  <Typography variant='h4'>
                    <AnimatedNumber value={item.title} color={item.textcolor} />
                  </Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <CustomAvatar color={item.textcolor} skin='light' variant='rounded' size={50}>
                  <Icon icon={item.icon} color={item.textcolor} className='text-[34px]' />
                </CustomAvatar>


                {/* <CustomAvatar color={avatarColor} skin='light' variant='rounded' size={42}>
                  <i className={classnames(avatarIcon, 'text-[26px]')} />
                </CustomAvatar> */}


              </div>
              {isBelowMdScreen && !isBelowSmScreen && index < invoiceData.length - 2 && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': index % 2 === 0
                  })}
                />
              )}
              {isBelowSmScreen && index < invoiceData.length - 1 && <Divider className='mbs-6' />}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InvoiceCard
