
// /src/components/Navbar.tsx

"use client"

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';  // Icons for the actions
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg'; // Icon for Sign In

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const router = useRouter(); // Next.js router for navigation

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    
    // Navigate based on the selected option
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/profil');
        break;
      case 2:
        router.push('/prispevok');
        break;
      case 3:
        router.push('/auth/prihlasenie');
        break;
      case 4:
        router.push('/auth/registracia');
        break;
      default:
        break;
    }
  };


  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue); // Handle navigation on change
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profil" icon={<PersonIcon />} />
        <BottomNavigationAction label="Prispevky" icon={<AddCircleIcon />} />
        <BottomNavigationAction label="prihlasenie" icon={<LoginIcon />} />
        <BottomNavigationAction label="Registracia" icon={<HowToRegIcon />} />
      </BottomNavigation>
    </Box>
  );
}