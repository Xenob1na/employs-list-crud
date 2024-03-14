import axios from "axios";
import { IEmployee } from "../types/employs.type";

class EmployServices {
  private URL = "http://localhost:3000/api/v1/employs/";
  async getPost() {
    try {
      const res = await axios.get<IEmployee[]>(this.URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res?.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const employServices = new EmployServices();
