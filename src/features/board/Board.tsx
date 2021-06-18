import { Box, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, IconButton, Modal, TextField } from '@material-ui/core'
import { blueGrey, orange, grey } from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react'
import './Board.css';
import BoardCard from './BoardCard';

const Board = () => {
    const [open, setOpen] = useState(false);
    const [newLaneName, setNewLaneName] = useState('');
    const [lanes, setLanes] = useState<any[]>([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (didSave: boolean) => {
        if (didSave) {
            setLanes([...lanes, { name: newLaneName}]);
        }
        setNewLaneName('');
        setOpen(false);
    };

    const renderLanes = (lanes: any[]) => lanes.map((lane, i) => <BoardCard lane={lane} />);

    return (
        <Box height="100%" display="flex">
            <Grid
            container
            style={{
                margin: 0,
            }}
            spacing={2}
            >
                { renderLanes(lanes) }
            </Grid>
            <Box display="flex" alignItems="center" justifyContent="center" minWidth="15%" className="add-lane-pane">
                <Fab color="primary" onClick={e => handleOpen()}>
                    <AddIcon />
                </Fab>
            </Box>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new lane</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input some information about your new lane!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={e => setNewLaneName(e.target.value)}
                        value={newLaneName}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={e => handleClose(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={e => handleClose(true)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Board;