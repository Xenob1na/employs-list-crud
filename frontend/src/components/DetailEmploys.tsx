import { useParams } from "react-router-dom";
import { employServices } from "../services/employs.services";
import { useEffect, useState } from "react";
import { IEmployee } from "../types/employs.type";
import { Link } from "react-router-dom";
import BtnUI from "./ui/BtnUI";
import Skeleton from "./ui/Skeleton";

const DetailEmploys = () => {
  const [data, setData] = useState<IEmployee>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    getEmploy();
  }, []);

  const getEmploy = async () => {
    try {
      setIsLoading(true);
      const res = await employServices.getEmployById(Number(id));
      setData(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-[30px] font-bold font-mono text-center mb-7">
        Детальная информация
      </h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              ФИО
            </th>
            <th scope="col" className="px-6 py-3">
              Номер телефона
            </th>
            <th scope="col" className="px-6 py-3">
              Почта
            </th>
            <th scope="col" className="px-6 py-3">
              Действия
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white  even:bg-gray-50  border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              {!isLoading && data.name}
              {isLoading && (
                <Skeleton />
              )}
            </th>
            <td className="px-6 py-4">
              {!isLoading && data.phone}{" "}
              {isLoading && (
                <Skeleton />
              )}
            </td>
            <td className="px-6 py-4">
              {!isLoading && data.email}{" "}
              {isLoading && (
                <Skeleton />
              )}
            </td>
            <td className="px-6 py-4 flex">
              <Link to={`/`}>
                <button className="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-3 px-6 flex gap-2 items-center">
                  Назад
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailEmploys;
