import { useState, useCallback } from "react";
import { API_URL, SETTINGS } from '../api';

const useFetchApi = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(API_URL, SETTINGS);
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, data, error, fetchData };
};

export default useFetchApi;