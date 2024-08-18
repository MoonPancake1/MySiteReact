import classes from "../../styles/Body/Body.module.css";
import AboutMe from "./AboutMe";
import CaruselBlock from "./CaruselBlock";
import FilterProject from "./FilterProject";
import CatalogProject from "./CatalogProject";
import PortfolioBlock from "./PortfolioBlock";
import ContactBlock from "./ContactBlock";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../../Api/AuthService";

const Body = () => {

    const [user, setUser] = useState(null);
    const [fetchUserData, isLoading, userError] = useFetching(
        async () => {
            const token = localStorage.getItem("access_token");
            const userData  = await AuthService.userData(token);
            setUser(userData);
        }
    )

    useEffect(() => {
        fetchUserData();
    }, []);

    function checkMe() {
        console.log(user);
    }

    return (
        <div className={classes.container}>
            <button onClick={checkMe}>
                check
            </button>
            <div className={classes.aboutMe}>
                <AboutMe/>
            </div>
            <div className={classes.carusel}>
                <CaruselBlock/>
            </div>
            <div className={classes.filter}>
                <FilterProject/>
            </div>
            <div className={classes.catalogProject}>
                <CatalogProject/>
            </div>
            <div className={classes.portfolioBlock}>
                <PortfolioBlock/>
            </div>
            <div className={classes.contactBlock}>
                <ContactBlock/>
            </div>
        </div>
    );
};

export default Body;