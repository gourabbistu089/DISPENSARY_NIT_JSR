
//Priyanshu kumar
import {createContext,useContext,useEffect,useState} from 'react';
import io from 'socket.io-client';
import {AuthContext} from './AuthContext'; 

export const SocketContext = createContext();

export const SocketProvider=({children}) => {
  
  const {user,logout}=useContext(AuthContext);
  const [socket,setSocket]=useState(null);


  useEffect(() => {

    if (user && user.token) {
      const token=user.token
      const newSocket = io(import.meta.env.VITE_API_BASE_URL, {
        auth: {token}
      });

      newSocket.on('connect',()=>{
        console.log('Socket connected:', newSocket.id);
      });
      
      newSocket.on('access-revoked',(data)=>{
        user.userId===data.user_id?logout():'';
      })



      newSocket.on('disconnect',()=>{
        console.log('Socket disconnected');
      });


      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
      
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [user]);


  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  );
};
