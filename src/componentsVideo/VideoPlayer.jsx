import React, { useContext, useEffect} from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, useMyRef, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  useEffect(() =>{console.log('rendering video')})

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            {/* <video id="localVideo" playsinline autoplay muted></video>
            <video id="remoteVideo" playsinline autoplay></video> */}
          </Grid>
        </Paper>
      )}
     
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call?.name || 'Name'}</Typography>
            <video id="remoteVideo" playsInline autoPlay></video> 
            {/* <video playsInline ref={useMyRef} autoPlay className={classes.video} /> */}
          </Grid>
        </Paper>
 
    </Grid>
  );
};

export default VideoPlayer;
