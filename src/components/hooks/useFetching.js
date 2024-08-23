import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (...args) => {
        try{
            setIsLoading(true);
            // setTimeout(async () => {
            //     await callback(...args)
            // }, 1000)
            // await wait(1000)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchData, isLoading, error]
}