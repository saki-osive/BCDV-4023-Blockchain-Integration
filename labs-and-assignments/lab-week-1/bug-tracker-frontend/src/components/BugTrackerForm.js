import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BugTrackerForm = () => {
    const [bugId, setBugId] = useState('');
    const [description, setDescription] = useState('');
    const [bugStatus, setBugStatus] = useState('');

    const handleAddBug = async () => {
        try {
            await axios.post('http://localhost:3000/bugtracker/addBug', {
                bugId,
                description,
                bugStatus,
            });
            console.log('Bug added successfully');
        } catch (error) {
            console.error('Error adding bug:', error.message);
        }
    };

    return (
        <div>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Bug ID"
                    variant="outlined"
                    value={bugId}
                    onChange={(e) => setBugId(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel id="bug-status-label">Bug Status</InputLabel>
                <Select
                    labelId="bug-status-label"
                    id="bug-status"
                    value={bugStatus}
                    label="Bug Status"
                    onChange={(e) => setBugStatus(e.target.value)}
                >
                    <MenuItem value="Reported">Reported</MenuItem>
                    <MenuItem value="In progress">In progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleAddBug}>
                Add Bug
            </Button>
        </div>
    );
};

export default BugTrackerForm;
