import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StartMeeting from "../components/StartMeeting";
import io from "socket.io-client";

const API_URL = "https://9d7b-180-151-211-10.ngrok-free.app";

const MeetingRoom = () => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers]=useState()

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io(`${API_URL}`);
    socket.on("connection", () => console.log("connected"));
    socket.on('all-users',users=>{
      console.log("active users",users)
      setActiveUsers(users)
    })
  }, []);

  return (
    <View style={styles.container}>
      {/* Start Meeting Section */}
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
