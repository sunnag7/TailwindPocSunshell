import React from 'react';
import { Images } from '../../mock';

const Slides = () => (
  Images.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} className={image.placeHolder} />)
);

export default Slides;