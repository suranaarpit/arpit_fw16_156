import { useState } from "react";
import { useFetch } from "../Hooks/useFetch";

type Data = {
  country: string;
};

const CountrySearch = () => {
  let url = "http://localhost:8080/countries";
  const [text, setText] = useState("");
  const { data, loading, error } = useFetch<Data>(url, {
    q: text || "?",
  });
  console.log(data);
  return (
    <div className=" w-fit m-auto p-[20px]">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Country Name"
        className="border border-black p-2 outline-none rounded-[9px]"
      />

      <div className="w-fit mt-1">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Oops! Something went wrong</div>
        ) : (
          data.map((c) => (
            <div key={c.country}>
              <ul>
                <li className="list-disc">{c.country}</li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CountrySearch;
