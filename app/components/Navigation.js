// components/Navigation.js
'use client'

import { AppBar, Toolbar, Button } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Idea Lab', path: '/idea-lab' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' }
  ]

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        {navItems.map(item => (
          <Button
            key={item.path}
            color={pathname === item.path ? 'warning' : 'inherit'}
            component={Link}
            href={item.path}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
