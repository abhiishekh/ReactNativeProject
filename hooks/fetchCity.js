import axios from "axios";
import { useEffect, useState } from "react";

const fetchCities = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
    
        try {
            const response = await axios.get('http://localhost:5003/api/city');
            console.log("Response data:", response.data);
            setCities(response.data.cities);
        } catch (error) {
            console.error("Axios error:", error); // Log Axios error
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { cities, isLoading, error, refetch };
};

export default fetchCities;
