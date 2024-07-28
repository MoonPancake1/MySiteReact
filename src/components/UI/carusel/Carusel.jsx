import React, {useState} from 'react';
import "./Carusel.css";
import CaruselCard from "../carusel_card/CaruselCard";
import btnNextPrev from "../../../images/right.svg";

const Carusel = (props) => {

    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
    };


    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button prv">
                <img src={btnNextPrev} alt="" className="btn-prev"/>
            </button>
            <div className="slides">
                {props.images.map((imageInfo, index) => {
                    const isActive = index === activeIndex;
                    const isNext = index === (activeIndex + 1) % props.images.length;
                    const isPrev = index === (activeIndex - 1 + props.images.length) % props.images.length;

                    return (
                        <div
                            key={index}
                            className={`slide ${isActive ? 'active' : ''}${isNext ? 'next' : ''}${isPrev ? 'prev' : ''}`}>
                            <CaruselCard
                                data={{
                                    title: imageInfo.title,
                                    description: imageInfo.description,
                                    image: imageInfo.image
                                }} key={index}
                            />
                        </div>
                    );
                })}
            </div>
            <button onClick={nextSlide} className="carousel-button nxt">
                <img src={btnNextPrev} alt="" className="btn-next"/>
            </button>
        </div>
    );

    // return (
    //     <div className={classes.imagesCarusel}>
    //         {props.images.map((imageInfo, index) => (
    //             index === 1
    //                 ? <CaruselCard active={true}
    //                 data={{title: imageInfo.title,
    //                 description: imageInfo.description,
    //                 image: imageInfo.image}} key={index} />
    //                 : <CaruselCard active={false}
    //                 data={{title: imageInfo.title,
    //                 description: imageInfo.description,
    //                 image: imageInfo.image}} key={index}/>
    //
    //         ))}
    //     </div>
    // );
};

export default Carusel;