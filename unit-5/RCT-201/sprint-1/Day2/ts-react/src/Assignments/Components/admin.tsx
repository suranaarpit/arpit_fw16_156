import { useEffect, useState } from "react";
import "./table.css";
import axios, { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LaptopInfo = {
  id: number;
  model: string;
  year: number;
  os: string;
  sh: string;
  sw: string;
  price: number;
};

const Admin = () => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [os, setOs] = useState<string>("");
  const [sh, setSh] = useState<string>("");
  const [sw, setSw] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [lap, setLap] = useState<LaptopInfo[]>([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get(`http://localhost:8080/lapData`)
      .then((res: AxiosResponse<LaptopInfo[]>) => {
        const { data } = res;
        setLap(data);
      });
  };

  const warningNotify = () =>
    toast.warning("Please Fill all the Details", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const successNotify = () =>
    toast.success("Information Added successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = () => {
    const payload = { model, year, os, sh, sw, price };
    console.log(payload);

    if (
      model == "" ||
      os == "" ||
      price == "" ||
      sh == "" ||
      sw == "" ||
      year == ""
    ) {
      warningNotify();
    } else {
      successNotify();
      axios.post(`http://localhost:8080/lapData`, payload).then(getdata);
    }
  };

  return (
    <div>
      <div className="h-[fit-content] w-[fit-content] m-auto mt-6">
        <div className="w-fit m-auto font-bold text-[25px] underline">
          Add Laptop Information
        </div>
        <br />
        <form className="w-fit">
          <label className="font-semibold text-[25px]">Model Name: </label>
          <input
            value={model}
            name="model"
            className="border border-black pl-[6px] ml-[55px]"
            type="text"
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <br />
          <label className="font-semibold text-[25px]">Making Year: </label>
          <input
            value={year}
            name="my"
            className="border border-black pl-[6px] ml-[60px]"
            type="number"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
          <br />
          <br />
          <label className="font-semibold text-[25px]">
            Operating System:{" "}
          </label>
          <input
            value={os}
            name="os"
            className="border border-black pl-[6px]"
            type="text"
            onChange={(e) => {
              setOs(e.target.value);
            }}
          />
          <br />
          <br />
          <label className="font-semibold text-[25px]">Screen Heigth: </label>
          <input
            value={sh}
            name="sh"
            className="border border-black pl-[6px] ml-[43px]"
            type="text"
            onChange={(e) => {
              setSh(e.target.value);
            }}
          />
          <br />
          <br />
          <label className="font-semibold text-[25px]">Screen Width: </label>
          <input
            value={sw}
            name="sw"
            className="border border-black pl-[6px] ml-[50px]"
            type="text"
            onChange={(e) => {
              setSw(e.target.value);
            }}
          />
          <br />
          <br />
          <label className="font-semibold text-[25px]">Price: </label>
          <input
            value={price}
            name="price"
            className="border border-black pl-[6px] ml-[146px]"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <br />
        </form>
        <input
          onClick={handleSubmit}
          className="border border-black cursor-pointer ml-[340px] mt-3 p-2 rounded-[10px] font-semibold"
          type="submit"
          value="Add"
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="border border-black w-[955px] h-[fit-content] m-auto mb-[50px]">
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Model Name</th>
              <th>Making Year</th>
              <th>Operating System</th>
              <th>Screen Height</th>
              <th>Screen Width</th>
              <th>Price (₹)</th>
            </tr>
            {lap.map((l) => {
              return (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.model}</td>
                  <td>{l.year}</td>
                  <td>{l.os}</td>
                  <td>{l.sh} cm</td>
                  <td>{l.sw} cm</td>
                  <td>₹ {l.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
