
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Button,
} from '@mui/material';
import { 
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  Search as SearchIcon,
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
      <Toolbar sx={{ minHeight: '70px !important' }}>
        <Box 
          sx={{ 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            startIcon={<SearchIcon />}
            sx={{ 
              color: 'text.secondary',
              bgcolor: 'background.default',
              '&:hover': {
                bgcolor: 'background.default',
              },
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
          >
            Search...
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            size="large" 
            sx={{ 
              bgcolor: 'background.default',
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton 
            size="large" 
            sx={{ 
              bgcolor: 'background.default',
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
          >
            <HelpIcon />
          </IconButton>
          <Avatar 
            sx={{ 
              width: 40, 
              height: 40,
              bgcolor: 'primary.main',
              cursor: 'pointer',
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
