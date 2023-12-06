import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const BugTrackerList = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bugtracker/getBugCount');
                const bugCount = response.data;

                const bugArray = [];
                for (let i = 0; i < bugCount; i++) {
                    const bugResponse = await axios.get(`http://localhost:3000/bugtracker/getBug/${i}`);
                    bugArray.push(bugResponse.data);
                }

                setBugs(bugArray);
            } catch (error) {
                console.error('Error fetching bugs:', error.message);
            }
        };

        fetchBugs();
    }, []);

    return (
        <div>
            <h2>Bug List</h2>
            <List>
                {bugs.map((bug, index) => (
                    <ListItem key={index}>
                        <div>
                            <strong>Bug ID:</strong> {bug.bugId} | <strong>Status:</strong> {bug.bugStatus}
                            <br />
                            <strong>Description:</strong> {bug.description}
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default BugTrackerList;
