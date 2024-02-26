import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import {
 
  switchLecture,
  clientsConnected,
  clientsDisconnected
 } from './components/Gramma/grammaSlice';
 import { useSelector, useDispatch } from 'react-redux'
const SocketContext = createContext();

const socket = io('http://localhost:5001');
// const socket = io('https://my-express-app-one.azurewebsites.net/');

const ContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [clients, setConnectClients] = useState([]);
  // eslint-disable-next-line prefer-const
  let connectedClients = []; // Array to store connected clients
  const myVideo = useRef(null);
  const userVideo = useRef();
  const connectionRef = useRef();
 // socket.on('online', (_name, id) => {dispatch(connectedClients(connectedClients))})
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        console.log(currentStream)
        setStream(currentStream);
        // const intervalId = setInterval(() => {
        //   myVideo.current.srcObject = currentStream;myVideo.current.srcObject = currentStream;
        // }, 1000);
        setTimeout(() => {
          console.log("Delayed for 1 second.");
          myVideo.current.srcObject = currentStream;
        }, "1000");
      // myVideo.current.srcObject = currentStream;
      });

    socket.on('me', (id) => setMe(id));
    socket.on('me', (id) => console.log(id));
    socket.on('online', (_name, id) => {
      console.log(`${_name} is online****`);
      console.log(id);
      if (!connectedClients.find((_clients) => _clients.socketId === id)) {
        const obj = {};
      obj.socketId = id; // add property first and only then prevent extensions
      //obj.clientName = _n
      Object.preventExtensions(obj);
        console.log(me);
        console.log(id);
        connectedClients.push({ socketId: id, clientName: _name }); // Store socket ID
        setConnectClients(connectedClients);
        // dispatch(switchLecture(e.key))
        dispatch(clientsConnected({ socketId: id, clientName: _name }))
        console.log(`connected clients ${connectedClients.length}`);
      }

      // connectedClients = connectedClients.filter((client) => client.socketId !== socket.id);
    });
    socket.on('client-disconnect', (id) => {
      console.log(`got disconnected for socket: ${id}`);
      connectedClients = connectedClients.filter((client) => client.socketId !== id);
      setConnectClients(connectedClients);
      dispatch(clientsDisconnected(id))
    });

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on('connect', () => {
      console.log('Connected to peer!');
    });

    peer.on('signal', (data) => {
      console.log('peer is on signal!');
      console.log(data);
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  function handleSuccess(newStream) {
    console.log(newStream);
    // setStream(newStream);
    // myVideo.current.srcObject = newStream;
    userVideo.current.srcObject = newStream;

    // demonstrates how to detect that the user has stopped
    // sharing the screen via the browser UI.
    newStream.getVideoTracks()[0].addEventListener('ended', () => {
      console.log('The user has ended sharing the screen');
      userVideo.current.srcObject = stream;
    });
  }

  const screenShare = () => {
    console.log('screen share ********************************');
    const options = { audio: true, video: true };

    navigator.mediaDevices.getDisplayMedia(options)
      .then(handleSuccess);

    // const peer = new Peer({ initiator: true, trickle: false, stream });

    // peer.on('signal', (data) => {
    //   socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    // });

    // peer.on('stream', (currentStream) => {
    //   userVideo.current.srcObject = currentStream;
    // });

    // socket.on('callAccepted', (signal) => {
    //   setCallAccepted(true);

    //   peer.signal(signal);
    // });

    // connectionRef.current = peer;
  };

  const logIn = (id) => {
    console.log(id);
    console.log(`name: ${name}`);
    console.log(`id: ${me}`);

    socket.emit('online', name, id);
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      connectedClients,
      clients,
      setName,
      callEnded,
      me,
      callUser,
      screenShare,
      logIn,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
