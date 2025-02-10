
import { Box, Grid, Paper, Typography, TextField, Button, Switch, FormControlLabel, Divider } from '@mui/material';
import Layout from '../components/layout/Layout';

const Settings = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Settings
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            AI Verification Questions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Introduction Message"
              multiline
              rows={3}
              defaultValue="Hello, this is an automated call from [Company Name]. We'd like to verify some information about your recent inquiry."
              fullWidth
            />
            <TextField
              label="Question 1"
              defaultValue="Can you confirm your interest in our services?"
              fullWidth
            />
            <TextField
              label="Question 2"
              defaultValue="What is the best time to schedule a consultation?"
              fullWidth
            />
            <TextField
              label="Question 3"
              defaultValue="Do you have any specific requirements we should know about?"
              fullWidth
            />
            <TextField
              label="Closing Message"
              multiline
              rows={2}
              defaultValue="Thank you for your time. We'll follow up with more information shortly."
              fullWidth
            />
          </Box>
        </Paper>

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
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <FormControlLabel
                    key={day}
                    control={<Switch defaultChecked />}
                    label={day}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Integration Settings
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                API Configuration
              </Typography>
              <TextField
                label="API Key"
                type="password"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Webhook URL"
                fullWidth
              />
            </Box>
            
            <Divider />
            
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Lead Routing
              </Typography>
              <TextField
                label="Google Calendar ID"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Nurturing API Endpoint"
                fullWidth
              />
            </Box>
            
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
