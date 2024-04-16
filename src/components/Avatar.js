import React from "react";

const Avatar = ({ src, alt, size }) => {
  return <img src={src} alt={alt} className={`rounded-full ${size}`} />;
};

export default Avatar;
