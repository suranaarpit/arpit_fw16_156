import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string, params: Record<string, unknown>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [params.q]);
  return { data, loading, error };
};
