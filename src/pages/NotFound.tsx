
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          Oops! Page not found
        </Typography>
        <Link 
          href="/" 
          sx={{ 
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
