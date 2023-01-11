import React from 'react';
import { Stack, Typography } from '@mui/material';

const EmptyState = ({ title, subtitle, action }) => {
  return (
    <Stack alignItems="center">
      <Typography variant="h6" textAlign="center">
        {title}
      </Typography>

      <Typography>{subtitle}</Typography>

      {action}
    </Stack>
  );
};

export default EmptyState;
