
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { 
  Notifications as NotificationsIcon,
  Help as HelpIcon 
} from '@mui/icons-material';

const TopBar = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="large" color="default">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="large" color="default">
            <HelpIcon />
          </IconButton>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32,
              bgcolor: 'primary.main',
              cursor: 'pointer'
            }}
          >
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
