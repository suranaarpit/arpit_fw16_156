import axios from "axios";
import { useState } from "react";
const URL = "https://api.github.com/search/users?q=overview";
type User = {
  id: number;
  login: string;
  avatar_url: string;
};

export const GitHubUserSearch = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<User[]>([]);
  return (
    <div>
      <input
        className="border border-black"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border border-black"
        onClick={() => {
          setLoading(true);
          axios
            .get(URL, {
              params: {
                per_page: 5,
                q: text,
              },
            })
            .then(({ data }) => {
              setData(data.items);
            });
        }}
      >
        Search
      </button>
      {data.map((user) => {
        return (
          <div key={user.id}>
            {user.login}
            <div>
              <img src={user.avatar_url} width={200} height={200} alt="avtar" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
