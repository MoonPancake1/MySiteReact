import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (...args) => {
        try{
            setIsLoading(true);
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchData, isLoading, error]
}