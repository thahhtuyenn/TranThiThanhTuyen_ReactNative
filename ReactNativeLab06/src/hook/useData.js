import { useState, useEffect } from "react";
import axios from "axios";
const useData = (url) => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = () => {
        axios({
            method: "GET",
            url: `${url}`,
        })
            .then((response) => {

                const list = response.data;
                const todoList = list.filter((todo) => {
                    return todo.status === false
                });

                console.log(todoList);

                setTodos(todoList);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    const updateStatus = (id) => {
        axios.put(`${url}/${id}`, {
            status: true,
        })
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const searchTodo = () => {
        if (search !== "" && search !== null) {
            const newTodos = todos.filter((todo) => {
                return todo.name.toLowerCase().includes(search.toLowerCase());
            });
            setTodos(newTodos);
        } else {
            fetchData();
        }
    }

    const updateTodo = (id, todoName) => {
        axios.put(`${url}/${id}`, {
            name: todoName,
        })
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const addTodo = (todoName) => {
        axios.post(`${url}`, {
            name: todoName,
            status: false,
        })
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchData()
    }, [url])

    return { todos, setTodos, search, setSearch, fetchData, updateStatus, searchTodo, updateTodo, addTodo };

}

export default useData;