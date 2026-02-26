import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Protected_Routes = () => {

    const [isAuth, setIsAuth] = useState(true);

    // useEffect(() => {

    //     axios.get("http://localhost:8080/api/check-auth", {
    //         withCredentials: true
    //     })
    //     .then(() => {console.log(isAuth)
    //         setIsAuth(true)})
    //     .catch(() => setIsAuth(false));

    // }, []);

    if (isAuth === null) {
        return <div>Loading...</div>;
    }

    return isAuth ? <Outlet /> : <Navigate to="/" />;

};

// export default Protected_Routes;
