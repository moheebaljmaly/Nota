import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // Add logic to store cookie consent preference here (e.g., using localStorage or cookies)
  };

  if (accepted) {
    return null; // Or render a message indicating consent has been given
  }

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
      <Typography variant="body1" gutterBottom>
        We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={accepted} onChange={() => {}} />}
        label="I agree to the use of cookies"
      />
      <Button variant="contained" onClick={handleAccept}>
        Accept
      </Button>
    </Box>
  );
};

export default CookieConsent;
