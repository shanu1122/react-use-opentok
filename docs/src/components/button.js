/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export default ({ children, ...props }) => (
  <button 
    {...props}
    sx={{
      p: 2,
      borderRadius: 3,
      border: 0,
      background: '#fff',
      '&:hover': {
        background: '#eee',
      },
      cursor: 'pointer',
      fontSize: 2,
      outline: 0,
    }}
  >
    {children}
  </button>
)