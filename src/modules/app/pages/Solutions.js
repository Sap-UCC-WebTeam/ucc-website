import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const Solutions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/solutions");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Solutions</h1>
    </div>
  );
};

export default Solutions;
