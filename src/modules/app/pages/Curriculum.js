import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const Curriculum = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/curriculum");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Curriculum</h1>
    </div>
  );
};

export default Curriculum;
