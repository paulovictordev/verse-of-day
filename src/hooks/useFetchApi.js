import { useState, useCallback } from "react";
import { API_URL, SETTINGS } from '../api';

const useFetchApi = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    const getVerse = obj => {
        return {
            book: obj.book.name,
            chapter: obj.chapter,
            number: obj.number,
            text: obj.text
        }
    }

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(API_URL, SETTINGS);
            const result = await response.json();
            const verse = getVerse(result);
            setData(verse);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, data, error, fetchData };
};

export default useFetchApi;