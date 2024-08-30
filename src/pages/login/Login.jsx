import React, {useContext, useEffect} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoginBlock from "../../components/Body/Login/LoginBlock";
import {AuthContext} from "../../context";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Header title="Авторизация" />
            <LoginBlock />
            <Footer />
        </div>
    );
};

export default Login;