import { useState, useEffect } from "react";
import axios from "axios";

export const useData = (url) => {
    const [donuts, setDonuts] = useState(true);
    const [category, setCategory] = useState({id: 1, name: "Donut"});

    const fetchData = async () => {
        if(category.name === "Donut"){
            axios.get(url)
            .then((response) => {
                console.log(response.data);
                setDonuts(response.data);
                
            })
            .catch((error) => console.error(error));
        }else{
            axios.get(`${url}?category=${category.name}`)
            .then((response) => {
                console.log(response.data);
                setDonuts(response.data);
                
            })
            .catch((error) => console.error(error));
        }
    };

    return { donuts, setDonuts, fetchData, category, setCategory };
};