import { useState, useEffect } from "react";
import axios from "axios";

export const useData = (url) => {
    const [donuts, setDonuts] = useState(true);

    const fetchData = async () => {
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setDonuts(response.data);
                
            })
            .catch((error) => console.error(error));
    };

    return { donuts, setDonuts, fetchData };
};