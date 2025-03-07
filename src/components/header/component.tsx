import { AppBar, Toolbar } from '@mui/material';
import { LogoMotion } from '../shared/LogoMotion';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoMotion text="YourName" />
        {/* Rest of your header content */}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 