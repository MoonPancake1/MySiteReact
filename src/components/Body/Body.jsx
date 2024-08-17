import classes from "../../styles/Body/Body.module.css";
import AboutMe from "./AboutMe";
import CaruselBlock from "./CaruselBlock";
import FilterProject from "./FilterProject";
import CatalogProject from "./CatalogProject";
import PortfolioBlock from "./PortfolioBlock";
import ContactBlock from "./ContactBlock";

const Body = () => {

    return (
        <div className={classes.container}>
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