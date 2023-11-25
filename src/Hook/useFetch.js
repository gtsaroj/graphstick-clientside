import { useEffect, useState } from 'react';
import { makeRequest } from '../makeRequest';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch_api_data = async () => {
            try {
                setLoading(true);
                const requestInstance = makeRequest()
                const res = await requestInstance.get(url);
                setData(res.data.data);
            } catch (err) {
                setError(true);
                console.error(`Error found: ${err}`)
            }
            setLoading(false);
        };
        fetch_api_data();
    }, [url]);

    return { error, data, loading }; // Return the object with error, data, and loading
};

export default useFetch;
