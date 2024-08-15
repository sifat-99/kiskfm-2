import React from 'react';
import { CarouselDefault } from './Carousel';
import Marquee from 'react-fast-marquee';
import ScrollNotice from './NoticeScroll';


const Banner = () => {
  return (
    <div className='flex justify-between items-center'>
      <CarouselDefault />
      <ScrollNotice />
    </div>
  );
};

export default Banner;