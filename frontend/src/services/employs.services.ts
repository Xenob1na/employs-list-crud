import axios from "axios";
import { IEmployee } from "../types/employs.type";

class EmployServices {
  private URL = "http://localhost:3000/api/v1/employs/";
  async getEmploy() {
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

  async deleteEmploy(id: number) {
    try {
      await axios.delete(this.URL + id);
    } catch (error) {
      console.log(error);
    }
  }

  async addEmploy(data: IEmployee) {
    try {
      await axios.post(this.URL, data);
    } catch (error) {
      console.log(error);
    }
  }

  async getEmployById(id: number) {
    try {
      const res = await axios.get<IEmployee>(this.URL + id);
      return res?.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateEmploy(id: number, data: IEmployee) {
    try {
      await axios.put(this.URL + id, data);
    } catch (error) {
      console.log(error);
    }
  }
}

export const employServices = new EmployServices();
