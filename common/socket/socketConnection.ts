import io from "socket.io-client";
const CreateSocketConnection = () => {
  return io(process.env.NEXT_PUBLIC_BACKEND_URL);
};
export default CreateSocketConnection;
