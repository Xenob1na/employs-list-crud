import Header from "./Header";
import EmployeesListItem from "./EmployListItem";
import { useEffect, useState } from "react";
import { employServices } from "../services/employs.services";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IEmployee } from "../types/employs.type";
import SkeletonEmployItem from "./ui/SkeletonEmployItem";

const EmployList = () => {
  const [employee, setEmployee] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState(false);

  const getEmploy = async () => {
    try {
      setLoading(true);
      const res = await employServices.getEmploy();
      setEmployee(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmploy();
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />
      {!loading && (
        <div>
          {employee.map((item) => (
            <EmployeesListItem
              key={item.id}
              {...item}
              setEmployee={setEmployee}
              employee={employee}
            />
          ))}
        </div>
      )}

      {loading && (
        <SkeletonEmployItem />
      )}
    </div>
  );
};

export default EmployList;
