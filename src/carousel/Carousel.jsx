import React from 'react'
import "./carousel.css"
import { useState, useEffect } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

function Caroussel({ images }) {
    const [touchPosition, setTouchPosition] = useState(null);
    const [current, setCurrent] = useState(0);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            slideRight();
        }

        if (diff < -5) {
            slideLeft();
        }

        setTouchPosition(null);
    };

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const renderNumberingAndArrows = () => {
        if (images.length > 1) {
            return (
                <>
                    <div className='carousel_numbering'>
                        {`${current + 1}/${images.length}`}
                    </div>
                    <span className='carousel_arrow_left' onClick={slideLeft}><MdArrowBackIos /></span>
                    <span className='carousel_arrow_right' onClick={slideRight}><MdArrowForwardIos /></span>
                </>
            );
        }
        return null;
    };

    return (
        <div className="App">
            <div className='carousel_container'>
                <div className='carousel'>
                    <div className='carousel_wrapper'>
                        {images.map((image, index) => {
                            return (
                                <div key={index} className={index === current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                    <img className='card_image' src={image} alt="" height={"500px"} width="100%" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} />
                                    <div className='card-overlay'>
                                        {renderNumberingAndArrows()}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Caroussel