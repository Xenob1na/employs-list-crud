import Header from "./Header";
import EmployeesListItem from "./EmployListItem";
import { useEffect, useState } from "react";
import { employServices } from "../services/employs.services";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployList = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const res = await employServices.getPost();
        setPost(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />
      {!loading && (
        <div>
          {post.map((item) => (
            <EmployeesListItem key={item.id} {...item} />
          ))}
        </div>
      )}

      {loading && (
        <div className="text-black mx-auto flex flex-col items-center justify-center">
          <AiOutlineLoading3Quarters
            className="animate-spin"
            style={{ fontSize: "50px" }}
          />
        </div>
      )}
    </div>
  );
};

export default EmployList;
