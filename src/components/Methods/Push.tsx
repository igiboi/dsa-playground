import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export function Push() {
  const [array, setArray] = useState<number[]>([1, 2, 3]);
  const [nextValue, setNextValue] = useState(4);

  const handlePush = () => {
    setArray([...array, nextValue]);
    setNextValue(nextValue + 1);
  };

  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Array.push()
      </Typography>

      <Stack direction='row' spacing={2} mb={2}>
        {array.map((value) => (
          <Box
            key={value}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: 'primary.main',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              fontWeight: 'bold',
            }}
          >
            {value}
          </Box>
        ))}
      </Stack>

      <Button variant='contained' onClick={handlePush}>
        Push {nextValue}
      </Button>
    </Box>
  );
}
