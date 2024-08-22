import React, {useState} from "react";
import './styles/App.css';
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import {AuthContext, TitleContext} from "./context";
import Project from "./pages/main/Project";

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [title, setTitle] = useState("");

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            user,
            setUser,
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

                        <Route path="*" element={<Navigate to="/"/>} />
                    </Routes>
                </BrowserRouter>
            </TitleContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
