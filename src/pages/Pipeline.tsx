
import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  Stack, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField,
  IconButton,
  MenuItem,
} from '@mui/material';
import Layout from '../components/layout/Layout';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { 
  FileDownload as FileDownloadIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

type Lead = {
  id: number;
  name: string;
  source: string;
  status: string;
  phone: string;
  attempts: number;
  lastAttempt: string | null;
  email: string;
  createdAt: string;
};

type Column = {
  id: string;
  title: string;
  items: Lead[];
};

const initialLeads = [
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

const initialColumns: { [key: string]: Column } = {
  'col-1': {
    id: 'col-1',
    title: 'Raw',
    items: initialLeads.filter(lead => lead.status === 'Raw'),
  },
  'col-2': {
    id: 'col-2',
    title: 'Verifying',
    items: initialLeads.filter(lead => lead.status === 'Verifying'),
  },
  'col-3': {
    id: 'col-3',
    title: 'Scheduled',
    items: initialLeads.filter(lead => lead.status === 'Scheduled'),
  },
};

const Pipeline = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [isColumnDialogOpen, setIsColumnDialogOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [editingColumn, setEditingColumn] = useState<string | null>(null);
  
  // Lead management state
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [leadForm, setLeadForm] = useState<Partial<Lead>>({
    name: '',
    email: '',
    phone: '',
    source: '',
  });

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  const handleAddColumn = () => {
    if (!newColumnTitle.trim()) return;
    
    const newColumnId = `col-${Object.keys(columns).length + 1}`;
    setColumns({
      ...columns,
      [newColumnId]: {
        id: newColumnId,
        title: newColumnTitle,
        items: [],
      },
    });
    setNewColumnTitle('');
    setIsColumnDialogOpen(false);
  };

  const handleEditColumn = (columnId: string) => {
    setEditingColumn(columnId);
    setNewColumnTitle(columns[columnId].title);
    setIsColumnDialogOpen(true);
  };

  const handleUpdateColumn = () => {
    if (!editingColumn || !newColumnTitle.trim()) return;
    
    setColumns({
      ...columns,
      [editingColumn]: {
        ...columns[editingColumn],
        title: newColumnTitle,
      },
    });
    setNewColumnTitle('');
    setEditingColumn(null);
    setIsColumnDialogOpen(false);
  };

  const handleDeleteColumn = (columnId: string) => {
    const newColumns = { ...columns };
    delete newColumns[columnId];
    setColumns(newColumns);
  };

  // Lead management functions
  const handleAddLead = () => {
    setEditingLead(null);
    setLeadForm({
      name: '',
      email: '',
      phone: '',
      source: '',
    });
    setIsLeadDialogOpen(true);
  };

  const handleEditLead = (lead: Lead) => {
    setEditingLead(lead);
    setLeadForm({ ...lead });
    setIsLeadDialogOpen(true);
  };

  const handleDeleteLead = (columnId: string, leadId: number) => {
    const column = columns[columnId];
    const updatedItems = column.items.filter(item => item.id !== leadId);
    
    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: updatedItems,
      },
    });
  };

  const handleSaveLead = () => {
    if (!leadForm.name || !leadForm.email || !leadForm.phone || !leadForm.source) return;

    const firstColumnId = Object.keys(columns)[0];
    const newLead: Lead = {
      id: editingLead?.id || Math.floor(Math.random() * 10000),
      name: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone,
      source: leadForm.source,
      status: columns[firstColumnId].title,
      attempts: editingLead?.attempts || 0,
      lastAttempt: editingLead?.lastAttempt || null,
      createdAt: editingLead?.createdAt || new Date().toISOString().split('T')[0],
    };

    if (editingLead) {
      // Update existing lead
      Object.keys(columns).forEach(columnId => {
        const column = columns[columnId];
        const leadIndex = column.items.findIndex(item => item.id === editingLead.id);
        if (leadIndex !== -1) {
          const updatedItems = [...column.items];
          updatedItems[leadIndex] = newLead;
          setColumns({
            ...columns,
            [columnId]: {
              ...column,
              items: updatedItems,
            },
          });
        }
      });
    } else {
      // Add new lead to first column
      setColumns({
        ...columns,
        [firstColumnId]: {
          ...columns[firstColumnId],
          items: [...columns[firstColumnId].items, newLead],
        },
      });
    }

    setIsLeadDialogOpen(false);
    setLeadForm({
      name: '',
      email: '',
      phone: '',
      source: '',
    });
    setEditingLead(null);
  };

  return (
    <Layout>
      <Box sx={{ height: 'calc(100vh - 100px)', p: 2 }}>
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
              onClick={handleAddLead}
            >
              Add Lead
            </Button>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={() => setIsColumnDialogOpen(true)}
            >
              Add Column
            </Button>
          </Stack>
        </Box>

        <DragDropContext onDragEnd={onDragEnd}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              height: 'calc(100% - 80px)',
              overflowX: 'auto',
              pb: 2,
            }}
          >
            {Object.entries(columns).map(([columnId, column]) => (
              <Paper
                key={columnId}
                sx={{
                  minWidth: 300,
                  backgroundColor: 'background.default',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="h6">{column.title}</Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      onClick={() => handleEditColumn(columnId)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDeleteColumn(columnId)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>

                <Droppable droppableId={columnId}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        p: 1,
                        flexGrow: 1,
                        overflowY: 'auto',
                      }}
                    >
                      {column.items.map((lead, index) => (
                        <Draggable
                          key={lead.id}
                          draggableId={lead.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <Paper
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                p: 2,
                                mb: 1,
                                backgroundColor: 'background.paper',
                                position: 'relative',
                              }}
                            >
                              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditLead(lead)}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => handleDeleteLead(columnId, lead.id)}
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 500, pr: 6 }}>
                                {lead.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {lead.email}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Source: {lead.source}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Attempts: {lead.attempts}
                              </Typography>
                            </Paper>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Paper>
            ))}
          </Box>
        </DragDropContext>

        {/* Column Dialog */}
        <Dialog 
          open={isColumnDialogOpen} 
          onClose={() => {
            setIsColumnDialogOpen(false);
            setNewColumnTitle('');
            setEditingColumn(null);
          }}
        >
          <DialogTitle>
            {editingColumn ? 'Edit Column' : 'Add New Column'}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Column Title"
              fullWidth
              variant="outlined"
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              setIsColumnDialogOpen(false);
              setNewColumnTitle('');
              setEditingColumn(null);
            }}>
              Cancel
            </Button>
            <Button 
              onClick={editingColumn ? handleUpdateColumn : handleAddColumn} 
              variant="contained"
            >
              {editingColumn ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Lead Dialog */}
        <Dialog 
          open={isLeadDialogOpen} 
          onClose={() => {
            setIsLeadDialogOpen(false);
            setLeadForm({});
            setEditingLead(null);
          }}
        >
          <DialogTitle>
            {editingLead ? 'Edit Lead' : 'Add New Lead'}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField
                label="Name"
                fullWidth
                value={leadForm.name || ''}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
              />
              <TextField
                label="Email"
                fullWidth
                value={leadForm.email || ''}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              />
              <TextField
                label="Phone"
                fullWidth
                value={leadForm.phone || ''}
                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
              />
              <TextField
                select
                label="Source"
                fullWidth
                value={leadForm.source || ''}
                onChange={(e) => setLeadForm({ ...leadForm, source: e.target.value })}
              >
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                <MenuItem value="Google">Google</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              setIsLeadDialogOpen(false);
              setLeadForm({});
              setEditingLead(null);
            }}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveLead} 
              variant="contained"
            >
              {editingLead ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Pipeline;
