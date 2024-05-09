import { useContext, useState } from "react"

import { UserContext } from "../User.context"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";
export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);

    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }
    async function logout() {
        try {
            // Remove the token from localStorage
            localStorage.removeItem('token');
            // Clear the user state
            setUser(null);
            // Redirect to the login page
            setRedirect('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    }


    if (!ready) {
        return "Loading..."
    }
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div>
            <AccountNav />

            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name}({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">LogOut</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}