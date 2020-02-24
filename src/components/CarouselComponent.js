import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';
import img1 from '../images/car back.jpg';


const items = [
    {
        src: require('../images/car2 700x463.png'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: require('../images/coffee 700x459.png'),
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        
        src: require('../images/car2 700x463.png'),
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const CarouselComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem 
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        
        <Container id='pics' className='pad nr' style={{ backgroundImage:`url(${img1})`, padding:250, border: 'black solid'}} fluid>
        <Carousel 
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </Container>
        
    );
}



export default CarouselComponent;