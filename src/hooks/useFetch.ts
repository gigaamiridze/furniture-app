import { useState, useEffect } from 'react';
import { useFetchProps } from '../interfaces';
import axios from 'axios';

function useFetch(props: useFetchProps) {
  const { endpoint, param } = props;
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const API_HOST = 'http://127.0.0.1:8000/api';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${API_HOST}/${endpoint}/${param && param}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error as string);
      setIsLoading(false);
    }
  }

  const refetch = () => {
    fetchData();
  }

  return { data, isLoading, error, refetch };
}

export default useFetch;
