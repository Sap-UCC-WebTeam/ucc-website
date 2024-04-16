import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const HelpTickets = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/help_tickets");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Help Tickets</h1>
    </div>
  );
};

export default HelpTickets;
