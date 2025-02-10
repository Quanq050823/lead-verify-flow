
import { Box, Grid, Paper, Typography, Button, TextField } from '@mui/material';
import Layout from '../components/layout/Layout';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

const ImportLeads = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Import Leads
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Upload File
              </Typography>
              <Box
                sx={{
                  border: '2px dashed',
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Drag and drop your file here, or click to browse
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supported formats: .xlsx, .csv
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ mt: 2 }}
                >
                  Choose File
                  <input hidden accept=".xlsx,.csv" type="file" />
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Import Settings
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Sheet Name"
                  placeholder="Enter sheet name"
                  fullWidth
                />
                <TextField
                  label="First Row Header"
                  select
                  fullWidth
                  defaultValue="yes"
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </TextField>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ImportLeads;
