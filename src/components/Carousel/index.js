import React, {  useEffect } from 'react';
import Thumbnail from '../Thumbnail';
import DotIcon from '../DotIcon';
import arrowDown from '../../images/arrow-down.png';

const Carousel = ({ children, time }) => {
  const [index, setIndex] = React.useState(0);
  const keys = children.map((child, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  });
  
  const _slides = () => {
    return children.map((child, idx) => (
      <Thumbnail key={idx} id={idx} selectedKey={index}>
        {child}
      </Thumbnail>
    ));
  }

  const _sliderDots = () => {
    return keys.map(key => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  }

  return (
    <div className="m-auto">
        <div className="slider-height">
          { _slides() }
        </div>
        <div className="slider-dots flex justify-center">
          { _sliderDots() }
        </div>

          <div className="hero-copy">
            <h3 className="text-left"><em>the flower that blooms in <br/>adversity is the rarest and <br/>most beautiful of all.</em></h3>
            <h3 className="text-right"><em>- Dadi Janki</em></h3>
          </div>

          <ul className="social-icons flex flex-wrap justify-end">
            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
          </ul>

          <a href="#welcome" className="scroll-down">
            <img src={arrowDown} alt="arrowDown" />
          </a>
    </div>
  );
}

export default Carousel;