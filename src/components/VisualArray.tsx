import {  Button, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const arrayData = [1, 2, 3, 4, 5];

export function VisualArray() {
  const [items, setItems] = useState(arrayData);

  const handleReverse = () => {
    setItems([...items].reverse());
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Stack direction="row" spacing={2}>
        <AnimatePresence initial={false}>
          {items.map((num) => (
            <motion.div
              key={num}
              layout
              transition={{ duration: 0.5 }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#1976d2',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              {num}
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>
      <Button variant="contained" onClick={handleReverse}>
        Reverse Array
      </Button>
    </Stack>
  );
}
