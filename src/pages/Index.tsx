
import { Box, Grid, Paper, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                height: '100%',
                background: 'linear-gradient(45deg, #7928CA, #FF0080)',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Total Leads
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                2,451
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                height: '100%',
                background: 'linear-gradient(45deg, #00DFD8, #007CF0)',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Verified Today
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                127
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                height: '100%',
                background: 'linear-gradient(45deg, #00F5A0, #00D9F5)',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Success Rate
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                85%
              </Typography>
            </Paper>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Recent Activity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No recent activity to display.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Index;
