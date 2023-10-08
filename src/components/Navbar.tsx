import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const Navbar = () => {
  return (
    <header className="header" style={{background:lightBlue[100]}}>
      <div className="container header__body">
        <div className="header__logo">
          <Link to={'/'}>
          <Button variant="text" size='large' style={{fontSize:"1.5rem", fontWeight:"bold"}} >Todo</Button>
          </Link>
        </div>
        <div className="header__menu">
          <Link to={'/'}>
            <Button variant='contained'>Home</Button>
          </Link>
          <Link to={'/counter'}>
            <Button variant='outlined'>Counter</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;