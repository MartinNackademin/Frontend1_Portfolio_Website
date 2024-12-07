import React, { useState } from 'react';
import './Slideshow.css';

const Slideshow = ({slideimages}) => {

    let [currentSlide, setCurrentSlide] = useState(0);


function nextSlide() {
    if (currentSlide >= slideimages.length - 1) {
        setCurrentSlide(0);
        
    } 
    else {
        setCurrentSlide(currentSlide + 1);
    }
    console.log(currentSlide);
}

function prevSlide() {
   
    if (currentSlide <= 0) {
        setCurrentSlide(slideimages.length - 1);
        
    } 
    else {
        setCurrentSlide(currentSlide - 1);
    }
    console.log(currentSlide);

}
    
    return (
        <div className="slideshow">
            <button onClick={prevSlide} className="slideshow-button">Previous</button>
            <button onClick={nextSlide} className="slideshow-button">Next</button>
            <img src={slideimages[currentSlide]} alt="" />
        </div>
    );
};

export default Slideshow;