
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileDownload as FileDownloadIcon } from '@mui/icons-material';

const conversionData = [
  { name: 'Raw', value: 400 },
  { name: 'Verifying', value: 300 },
  { name: 'Scheduled', value: 200 },
  { name: 'Nurturing', value: 100 },
];

const callAttemptData = [
  { name: '1st Attempt', success: 50, failed: 20 },
  { name: '2nd Attempt', success: 30, failed: 15 },
  { name: '3rd Attempt', success: 20, failed: 10 },
  { name: '4th+ Attempt', success: 10, failed: 5 },
];

const sourceData = [
  { name: 'Facebook', value: 45 },
  { name: 'LinkedIn', value: 30 },
  { name: 'Google', value: 25 },
];

const COLORS = ['#7928CA', '#FF0080', '#0070F3', '#00DFD8'];

const Analytics = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Analytics
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<FileDownloadIcon />}
            onClick={() => console.log('Generate Report')}
          >
            Generate Report
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, height: '400px' }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Call Attempt Statistics
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={callAttemptData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="success" fill="#7928CA" name="Success" />
                  <Bar dataKey="failed" fill="#FF0080" name="Failed" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Conversion Rate
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
                65%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overall qualification rate
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Lead Sources
              </Typography>
              <Box sx={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                {sourceData.map((source, index) => (
                  <Box key={source.name} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{source.name}</Typography>
                    <Typography fontWeight={600}>{source.value}%</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Lead Status Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#7928CA" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Analytics;
