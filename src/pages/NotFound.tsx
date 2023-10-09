import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h2>Sorry</h2>
        <p>That page doesn't exist</p>
        <Link to='/'>
          <Button variant='contained'>Back to Home Page</Button>
        </Link>        
      </div>
    </div>
  );
}

export default NotFound;