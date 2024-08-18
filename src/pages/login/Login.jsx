import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoginBlock from "../../components/Body/Login/LoginBlock";

const Login = () => {
    return (
        <div>
            <Header title="Авторизация" />
            <LoginBlock />
            <Footer />
        </div>
    );
};

export default Login;