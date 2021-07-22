import React from 'react';
import { Images } from '../mock';


import Slides from './Slides';
import Thumbnail from './Thumbnail';
import Carousel from './Carousel';
import DotIcon from './DotIcon'
export { 
  Slides,
  Thumbnail,
  Carousel,
  DotIcon
};

function Index() {
  return (
    <section className="hero-section">
        <Carousel time={3000}>
          { 
            Images.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} className={image.placeHolder} />) 
          }
        </Carousel>
    </section>
    );
  }

  export default Index;