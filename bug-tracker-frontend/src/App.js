import React from 'react';
import BugTrackerForm from './components/BugTrackerForm';
import BugTrackerList from './components/BugTrackerList';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Bug Tracker
                </Typography>
                <BugTrackerForm />
                <BugTrackerList />
            </Box>
        </Container>
    );
}

export default App;
