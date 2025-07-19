import { useEffect, useState } from "react";
import socket from "./socket";

const useOnlineUsers = (currentUserId) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.emit("user-connected", currentUserId);

    socket.on("online-users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("online-users");
    };
  }, [currentUserId]);

  return onlineUsers;
};

export default useOnlineUsers;
