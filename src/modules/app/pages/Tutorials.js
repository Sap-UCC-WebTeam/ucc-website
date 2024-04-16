import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const Tutorials = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/tutorials");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Tutorials</h1>
    </div>
  );
};

export default Tutorials;
