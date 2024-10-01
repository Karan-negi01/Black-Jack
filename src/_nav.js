import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
 
  cilChartPie,
  cilCursor,
 
  cilNotes,
  
  cilPuzzle,
  cilSpeedometer,
  
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '',
    },
  },
  
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Your Restaurant',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Restaurant',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Restaurant 1',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Restaurant 2',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Restaurant 3',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Restaurant 4',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Restaurant 5',
        to: '/base/list-groups',
      },
      

    ],
  },
  {
    component: CNavGroup,
    name: 'Your Playlist',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Menus',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Crousels',
        to: '/buttons/button-groups',
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Portfolio',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Recent Activity',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
 
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
     
    ],
  },


 
]

export default _nav
