import Header from "./Header";
import EmployeesListItem from "./EmployListItem";
import { useEffect, useState } from "react";
import { employServices } from "../services/employs.services";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IEmployee } from "../types/employs.type";

const EmployList = () => {
  const [post, setPost] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    try {
      setLoading(true);
      const res = await employServices.getPost();
      setPost(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <div className="text-black mx-auto flex flex-col items-center justify-center mt-[130px]">
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
