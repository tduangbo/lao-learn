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
  let peer2;
  let peer1;
 // const [peer2, setPeer2] = useState();
 // const [peer1, setPeer1] = useState(null);
  const [clients, setConnectClients] = useState([]);
 // const [myRef, setMyRef] = useState(null);
  // eslint-disable-next-line prefer-const
  let connectedClients = []; // Array to store connected clients
  let remoteVideo = document.getElementById('remoteVideo');
  const myVideo = useRef(null);
  //const userVideo = useRef();
  const useMyRef = useRef(null);
// const useMyRef = (...refs) => {
//   const refa = useRef(null);

//   useEffect(() => {
//     refs.forEach(ref => {
//       if (!ref) return

//       if (typeof ref === 'function') {
//         ref(refa.current)
//       } else {
//         ref.current = refa.current
//       }
//     })
//     // Do something with the ref here
//   }, [refs]);

//   return refa;
// };

  const connectionRef = useRef();
 // socket.on('online', (_name, id) => {dispatch(connectedClients(connectedClients))})
  useEffect(() => {
    console.log(useMyRef);
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
      console.log(`got call from ${from} to ${callerName}`);
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);
 //let peer1;
  const answerCall = () => {
    setCallAccepted(true);
    setCallEnded(false);
   peer1 = new Peer({ initiator: false, trickle: false, stream });
   console.log(peer1);
  // setPeer1(peer1);
    peer1.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer1.on('stream', (currentStream) => {
     // console.log(currentStream);
     // console.log(useMyRef )
     // const remoteVideo = document.getElementById('remoteVideo');
     remoteVideo = document.getElementById('remoteVideo');
      console.log(remoteVideo);
      remoteVideo.srcObject = currentStream;
     // useMyRef.current.srcObject = currentStream;
    });

    peer1.on("close", () => {
      setCallAccepted(false);
      setCallEnded(true);
      setCall(null);
      console.log("Connection with peer closed ----------------------------:(");
    });
    peer1.on('close', () => { console.log('peer closed'); socket.off("callAccepted"); });
    peer1.signal(call.signal);

    connectionRef.current = peer1;
   // peer1.destroy();
  };
  

  
  const callUser = (id) => {
   // setCallAccepted(true);
    console.log('set call accepted to false');
    setCallEnded(false);
    peer2 = new Peer({ initiator: true, trickle: false, stream });
    console.log(peer2)
  
    peer2.on('connect', () => {
      console.log('Connected to peer!');
    });
    peer2.on('disconnect', () => {
      console.log('Disconnected from peer!');
    });

    peer2.on("close", () => {
      setCallAccepted(false);
    
      setCall(null);
      
     leaveCall(null);
    // leaveCall
     //connectionRef.current.destroy();
      console.log("Connection with peer closed ----------------------------:(");
    });
    peer2.on('close', () => { console.log('peer closed'); socket.off("callAccepted"); });

    peer2.on('signal', (data) => {
      console.log('peer is on signal!' + id);
      console.log(data);
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer2.on('stream', (currentStream) => {
      remoteVideo = document.getElementById('remoteVideo');
      console.log(remoteVideo);
      remoteVideo.srcObject = currentStream;
     // useMyRef.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      console.log('received answer ----------------------------' + signal);
      console.log(signal);
      console.log(peer2);
      setCallAccepted(true);
      setCallEnded(false);

      peer2.signal(signal);
    });

    connectionRef.current = peer2;
  };

  function handleSuccess(newStream) {
    console.log(newStream);
    // setStream(newStream);
    // myVideo.current.srcObject = newStream;
    useMyRef.current.srcObject = newStream;

    // demonstrates how to detect that the user has stopped
    // sharing the screen via the browser UI.
    newStream.getVideoTracks()[0].addEventListener('ended', () => {
      console.log('The user has ended sharing the screen');
      useMyRef.current.srcObject = stream;
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
    console.log('leave call');
   // remoteVideo.srcObject = null;
    

    setCallEnded(true);
   // 
   // connectionRef.current = null;
  //  if(peer1){
  //   console.log(peer1)
  //   peer1.destroy();
  //   peer1 = null;
  //  }
  if(connectionRef.current){
    connectionRef.current.destroy();
    console.log('leave called -------')
    connectionRef.current = null;
  }
  

      setCallAccepted(false);
      // eslint-disable-next-line no-undef
      //setCall({});
 
  
  
    socket.emit('end-call', me);
  
   // peer2.destroy();

    

   // window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      useMyRef,
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
//https://github.com/olgeorge/react-electron-webrtc-phaser/blob/master/app/services/peerConnection.js