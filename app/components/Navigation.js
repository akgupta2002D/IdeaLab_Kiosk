/**
 * Navigation.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This component renders the navigation bar for the Kioskx Idea Lab Kiosk App.
 * It uses Material UI's AppBar and Toolbar components to create a top bar with
 * navigation buttons that link to different sections of the app.
 */

'use client'

import { AppBar, Toolbar, Button } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname() // Get the current path to highlight the active link

  // Define navigation items with their labels and paths
  const navItems = [
    { label: 'Idea Lab', path: '/idea-lab' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' }
  ]

  return (
    <AppBar position='static' color='primary'>
      {' '}
      {/* Main navigation bar */}
      <Toolbar>
        {' '}
        {/* Container for navigation items */}
        {navItems.map(item => (
          <Button
            key={item.path}
            color={pathname === item.path ? 'warning' : 'inherit'} // Highlight active page
            component={Link}
            href={item.path}
          >
            {item.label} {/* Display the label of the navigation item */}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
