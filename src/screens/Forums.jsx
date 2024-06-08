import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashLayout from "../components/Layout/DashLayout";
import { Forum } from "../components/forums";
import { connectSocket } from "../store/messageSlice";

function Forums() {
  const { socket } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(connectSocket());

    // clean up function
    return () => {
      socket?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DashLayout children={<Forum />} />;
}

export default Forums;
