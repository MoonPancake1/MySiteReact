import React, {useContext, useEffect, useState} from 'react';
import {useSearchParams, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context";
import userClass from "../../utils/userClass";
import {useFetching} from "../../components/hooks/useFetching";
import Loader from "../../components/UI/loader/Loader";
import classes from "../../styles/Body/Login/Auth.module.css";

const Auth = () => {

    const navigate = useNavigate();

    const auth = useContext(AuthContext)
    const [searchParams, setSearchParams] = useSearchParams();
    const access_token = searchParams.get("access_token");
    const refresh_token = searchParams.get("refresh_token");
    const [userData, setUserData] = useState(null);

    const userObj = new userClass(access_token, refresh_token);
    const [fetchUserData, isLoading, userDataError] = useFetching(
        async () => {
            try {
                const userData = await userObj.getUserData();
                setUserData(userData);
                auth.setIsAuthenticated(true)
                auth.setUser(userObj)
                localStorage.setItem("userTokens", JSON.stringify(userObj))
            } catch (e) {
                console.error(e);
                auth.setIsAuthenticated(false)
            }
        });

    useEffect(() => {
        // eslint-disable-next-line
        fetchUserData();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            navigate('/');
        }
    }, [isLoading]);

    return (
        <div className={classes.authDivLoaderContainer}>
            <Loader/>
        </div>
    );
};

export default Auth;