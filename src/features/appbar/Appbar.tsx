import { Box, Button, Container } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import React from 'react'

function Appbar() {
    return (
        <Box 
        display="flex"
        justifyContent="space-between"
        padding={1}
        bgcolor={orange[500]}
        color="white"
        >
            Yet Another Retro Review Board
            <Button 
            variant="contained" 
            color="primary">
                Login with Google
            </Button>
        </Box>
    )
}

export default Appbar
