'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useRouter } from 'next/navigation'

const pages = [
  { label: 'Home', path: '/' },
  { label: 'APOD', path: '/apod' },
  { label: 'Mars', path: '/mars' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'EPIC', path: '/epic?date=2024-04-01' },
  { label: 'Sign Up', path: '/signup' },
]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (path?: string) => {
    setAnchorElNav(null)
    if (path) router.push(path)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            NASA App
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={() => handleCloseNavMenu()}>
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleCloseNavMenu(page.path)}>
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button key={page.label} onClick={() => handleCloseNavMenu(page.path)} sx={{ color: 'white' }}>
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
