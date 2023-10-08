import { Checkbox, FormControlLabel } from '@mui/material';
interface FilterProps {
  showDone: boolean,
  setShowDone: React.Dispatch<React.SetStateAction<boolean>>,
}

const Filter = ({showDone, setShowDone}: FilterProps) => {

  const filterTodos = () => {
    if (showDone) {
      setShowDone(!showDone);
    } else {
      setShowDone(!showDone);
    }
  }

  return (
    <FormControlLabel control={
      <Checkbox
        checked={showDone}
        onChange={filterTodos}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    }
      label="Show done todos"
    />
  );
}

export default Filter;