import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ filteringText, onChange }) => {
  return (
    <TextField
      label="Search game"
      size="small"
      onChange={(event) => onChange({ detail: { filteringText: event.target.value } })}
      value={filteringText}
      InputProps={{
        type: 'search',
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
