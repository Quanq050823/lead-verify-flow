
import { Box, Grid, Paper, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import Layout from '../components/layout/Layout';

const Settings = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Settings
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Business Hours
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Time"
                type="time"
                defaultValue="09:00"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Time"
                type="time"
                defaultValue="17:00"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Verification Settings
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Auto-verification"
            />
            <TextField
              label="Maximum Attempts"
              type="number"
              defaultValue={3}
              fullWidth
            />
            <TextField
              label="Retry Interval (minutes)"
              type="number"
              defaultValue={60}
              fullWidth
            />
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Integration Settings
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="API Key"
              type="password"
              fullWidth
            />
            <TextField
              label="Webhook URL"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ alignSelf: 'flex-start', mt: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Settings;
