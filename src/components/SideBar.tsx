import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  ListItemButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const sidebarItems = [
  {
    title: 'Arrays',
    basePath: 'arrays',
    items: ['Reverse', 'Two Sum', 'Find Max'],
  },
  {
    title: 'Hash Tables',
    basePath: 'hash-tables',
    items: ['Frequency Counter', 'First Unique'],
  },
  {
    title: 'Linked Lists',
    basePath: 'linked-lists',
    items: ['Reverse', 'Detect Cycle'],
  },
];

export function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        {sidebarItems.map((section) => (
          <List
            key={section.title}
            subheader={<ListSubheader>{section.title}</ListSubheader>}
          >
            {section.items.map((text) => {
              const slug = text.toLowerCase().replace(/\s+/g, '-');
              const path = `/${section.basePath}/${slug}`;

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton component={RouterLink} to={path}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        ))}
      </Box>
    </Drawer>
  );
}
