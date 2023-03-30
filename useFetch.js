import axios from "axios";
import { useState, useEffect} from "react";

export function useFetch() {
    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get()
    }, [])
}