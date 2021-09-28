import './App.css';
import { Button, Rating } from '@mui/material';
import { Box } from '@mui/system';
import Newspaper from './components/Newspaper/Newspaper';

function App () {
  return (
    <div className="App">
      <Box sx={ { mx: "auto", width: 600, mt: 3 } }>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Rating name="read-only" value={ 4 } readOnly />
      </Box>

      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
