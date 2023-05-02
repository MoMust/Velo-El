import { useState, useEffect } from "react";
// import axios from 'axios'
import { makeRequest } from "../../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await makeRequest.get(url);
        // console.log('resp:',resp.data.data)
        setData(resp.data.data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);

      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
