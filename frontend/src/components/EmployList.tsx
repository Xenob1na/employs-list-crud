import Header from "./Header";
import EmployeesListItem from "./EmployListItem";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployList = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/employs/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPost(res?.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Header />
      {post.map((item) => (
        <EmployeesListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default EmployList;
