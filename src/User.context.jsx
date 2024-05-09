import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});
export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !user) {
            axios.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data }) => {
                    setUser(data);
                    setReady(true);
                })
                .catch(error => {
                    console.error("Error fetching user profile:", error);
                    setReady(true); // Set ready state even if there's an error to avoid infinite loading
                });
        } else {
            setReady(true);
        }
    }, [user]); // Add user to dependencies to ensure useEffect runs when user changes

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}
