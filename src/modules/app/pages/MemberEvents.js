import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const MemberEvents = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/member_events");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Member Events</h1>
    </div>
  );
};

export default MemberEvents;
