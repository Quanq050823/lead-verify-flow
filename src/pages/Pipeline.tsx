
import { Box, Grid, Paper, Typography, Chip, IconButton } from '@mui/material';
import Layout from '../components/layout/Layout';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const leadData = [
  { id: 1, name: 'John Doe', source: 'Facebook', status: 'Raw', phone: '+1234567890' },
  { id: 2, name: 'Jane Smith', source: 'LinkedIn', status: 'Verifying', phone: '+0987654321' },
  { id: 3, name: 'Mike Johnson', source: 'Google', status: 'Scheduled', phone: '+1122334455' },
];

const Pipeline = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Lead Pipeline
        </Typography>
        
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Box sx={{ p: 3 }}>
            {leadData.map((lead) => (
              <Paper
                key={lead.id}
                sx={{
                  p: 2,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {lead.name}
                  </Typography>
                  <Chip
                    label={lead.source}
                    size="small"
                    sx={{ backgroundColor: 'primary.light' }}
                  />
                  <Chip
                    label={lead.status}
                    size="small"
                    color={
                      lead.status === 'Scheduled'
                        ? 'success'
                        : lead.status === 'Verifying'
                        ? 'warning'
                        : 'default'
                    }
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {lead.phone}
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Pipeline;
