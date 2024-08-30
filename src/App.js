import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import {AuthContext, TitleContext} from "./context";
import Project from "./pages/main/Project";
import Auth from "./pages/login/Auth";
import {useFetching} from "./components/hooks/useFetching";
import UserService from "./Api/UserService";
import Loader from "./components/UI/loader/Loader";


function App() {

    // http://localhost:3000/auth/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiOTE0ZjU2ZDQtYjYxNi00YjZmLTg3MTAtOWY5ZWI3MWRlMTYyIiwiZXhwIjoxNzI1MDQ1Mzk1fQ.ZNiDW2aA8LfMxXnAJZISvKnICHrb4YCdU1rkOgSAigo&refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicmVmcmVzaCIsInN1YiI6IjkxNGY1NmQ0LWI2MTYtNGI2Zi04NzEwLTlmOWViNzFkZTE2MiIsImV4cCI6MTcyNzYzMzc5NX0.VTGn72d-6LTnsmT8JPj01Lr5LewxO3SUydNo1XgjAOY

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [title, setTitle] = useState("");
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [fetchUserData, userDataLoading] = useFetching(
    async () => {
        const userCheck = JSON.parse(localStorage.getItem('userTokens'));

        if (userCheck) {
            try {
                const userData = await UserService.getUserInfoByAccessToken(userCheck.access_token);
                setIsAuthenticated(true)
                setUser(userData);
                setAccessToken(userCheck.access_token);
                setRefreshToken(userCheck.refresh_token);
            } catch (e) {
                localStorage.removeItem('userTokens')
            }
        }
    })

    useEffect(() => {
        // eslint-disable-next-line
        fetchUserData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {userDataLoading
                ?   <Loader/>
                :   <AuthContext.Provider value={{
                        isAuthenticated,
                        setIsAuthenticated,
                        user,
                        setUser,
                        accessToken,
                        setAccessToken,
                        refreshToken,
                        setRefreshToken,
                    }}>
                        <TitleContext.Provider value={{
                            title: title,
                            setTitle: setTitle
                        }}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Main/>}/>
                                    <Route path="/login/" element={<Login/>}/>
                                    <Route path="/project/:id/" element={<Project/>}/>
                                    <Route path="/auth/" element={<Auth/>}/>

                                    <Route path="*" element={<Navigate to="/"/>} />
                                </Routes>
                            </BrowserRouter>
                        </TitleContext.Provider>
                    </AuthContext.Provider>
            }
        </>
    );
}

export default App;
