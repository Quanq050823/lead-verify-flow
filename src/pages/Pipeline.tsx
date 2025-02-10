
import { useState } from 'react';
import { Box, Grid, Paper, Typography, Chip, IconButton, Menu, MenuItem, Button, Stack } from '@mui/material';
import Layout from '../components/layout/Layout';
import { 
  MoreVert as MoreVertIcon,
  FileDownload as FileDownloadIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const leadData = [
  { 
    id: 1, 
    name: 'John Doe', 
    source: 'Facebook', 
    status: 'Raw', 
    phone: '+1234567890',
    attempts: 0,
    lastAttempt: null,
    email: 'john@example.com',
    createdAt: '2024-03-15',
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    source: 'LinkedIn', 
    status: 'Verifying', 
    phone: '+0987654321',
    attempts: 2,
    lastAttempt: '2024-03-16',
    email: 'jane@example.com',
    createdAt: '2024-03-14',
  },
  { 
    id: 3, 
    name: 'Mike Johnson', 
    source: 'Google', 
    status: 'Scheduled', 
    phone: '+1122334455',
    attempts: 3,
    lastAttempt: '2024-03-15',
    email: 'mike@example.com',
    createdAt: '2024-03-13',
  },
];

const Pipeline = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLead, setSelectedLead] = useState<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, leadId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedLead(leadId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedLead(null);
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Lead Pipeline
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button 
              variant="outlined" 
              startIcon={<FileDownloadIcon />}
              onClick={() => console.log('Export')}
            >
              Export
            </Button>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={() => console.log('Add Lead')}
            >
              Add Lead
            </Button>
          </Stack>
        </Box>
        
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Box sx={{ p: 3 }}>
            {leadData.map((lead) => (
              <Paper
                key={lead.id}
                sx={{
                  p: 2,
                  mb: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  justifyContent: 'space-between',
                  gap: 2
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
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
                  <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary', flexWrap: 'wrap' }}>
                    <Typography variant="body2">{lead.phone}</Typography>
                    <Typography variant="body2">•</Typography>
                    <Typography variant="body2">{lead.email}</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" color="text.secondary">
                      Attempts: {lead.attempts}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Created: {lead.createdAt}
                    </Typography>
                  </Box>
                  <IconButton 
                    size="small"
                    onClick={(e) => handleMenuOpen(e, lead.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Box>
        </Paper>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Update Status</MenuItem>
          <MenuItem onClick={handleMenuClose}>Edit Details</MenuItem>
          <MenuItem onClick={handleMenuClose}>View History</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>Delete</MenuItem>
        </Menu>
      </Box>
    </Layout>
  );
};

export default Pipeline;
