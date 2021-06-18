import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton } from '@material-ui/core'
import { green, grey, red } from '@material-ui/core/colors'
import React, {useState} from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default ({lane} : any) => {
    const [nLikes, setNLikes] = useState(0);
    const [nDisikes, setNDisikes] = useState(0);
    return (
        <Grid key={lane.name} item xs={2}>
            <Card
            style={{
                backgroundColor: grey[300]
            }}
            >
                <CardHeader 
                title={lane.name}
                />
                <CardContent>Lane Content</CardContent>
                <CardActions>
                    <IconButton style={{color: green[500]}} onClick={e => setNLikes(l => l+1)}>{ nLikes }<ThumbUpIcon /></IconButton>
                    <IconButton style={{color: red[500]}} onClick={e => setNDisikes(l => l+1)}>{ nDisikes }<ThumbDownIcon /></IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}
