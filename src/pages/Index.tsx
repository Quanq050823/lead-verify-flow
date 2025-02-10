
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

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
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <ArrowUpward sx={{ color: '#4CAF50', mr: 1 }} />
                <Typography variant="body2">
                  12% from last month
                </Typography>
              </Box>
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
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <ArrowUpward sx={{ color: '#4CAF50', mr: 1 }} />
                <Typography variant="body2">
                  8% from yesterday
                </Typography>
              </Box>
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
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <ArrowDownward sx={{ color: '#f44336', mr: 1 }} />
                <Typography variant="body2">
                  3% from last week
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Recent Activity
              </Typography>
              {[1, 2, 3].map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:last-child': { borderBottom: 0 }
                  }}
                >
                  <Typography variant="subtitle2">
                    Lead #{item} verified successfully
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2 hours ago
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="outlined" fullWidth>
                  Import New Leads
                </Button>
                <Button variant="outlined" fullWidth>
                  View Reports
                </Button>
                <Button variant="outlined" fullWidth>
                  Configure Settings
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Index;
