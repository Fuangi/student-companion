import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashLayout from "../components/Layout/DashLayout";
import { connectSocket } from "../store/messageSlice";
import ForumList from "../components/forums/ForumList";
import { getAllGroups } from "../services/apiGroups";
import { Outlet } from "react-router-dom";

function Forums() {
  // eslint-disable-next-line no-unused-vars
  const [groups, setGroups] = useState([]);
  // const [currentGroup, setCurrentGroup] = useState(null);

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

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await getAllGroups();
        setGroups(res);
      } catch (err) {
        console.log("Failed to fetch groups", err);
      }
    };
    fetchGroups();
  }, []);

  return (
    <DashLayout>
      <div className="forum-container">
        <ForumList groups={groups} />
        <div className="conversations">
          <Outlet />
        </div>
      </div>
    </DashLayout>
  );
}

export default Forums;
