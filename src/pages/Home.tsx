import { Box, Typography, Button, Stack } from '@mui/material';

export function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h3' gutterBottom>
        🧠 DSA Playground
      </Typography>
      <Typography variant='h6' color='text.secondary' gutterBottom>
        Visualize and interact with data structures and algorithms.
      </Typography>

      <Stack direction='row' spacing={2} mt={4}>
        <Button variant='contained' size='large'>
          Get Started
        </Button>
        <Button variant='outlined' size='large'>
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}
