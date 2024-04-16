import React, { useEffect, useState } from "react";
import api from "../../auth/authUtils";

const ProductRequests = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/view_requests");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Product Requests</h1>
    </div>
  );
};

export default ProductRequests;
