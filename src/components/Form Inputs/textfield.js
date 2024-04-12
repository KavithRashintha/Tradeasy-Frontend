import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({ id, name, variant, size, type, style, value, onChange, error }) {
  return (
      <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
              width: '17.5em',
              "& .MuiInputBase-root": {
                height: '2em',
                backgroundColor: '#e9eeff'
              },
              "& .MuiInputLabel-root": {
                fontSize: '0.5em',
                textAlign: 'center',
              },
            },
          }}
          autoComplete="off"
      >
        <TextField
            id={id}
            name={name}
            variant={variant}
            size={size}
            type={type}
            style={style}
            margin='normal'
            required
            value={value}
            onChange={onChange}
            error={error}
            helperText={error ? "This field is required" : ""}
            InputLabelProps={{
              shrink: true,
              error: error,
            }}
        />
      </Box>
  );
}
