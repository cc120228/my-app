import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Advertisement.css';
import { Pagination, Navigation } from 'swiper/modules';
import Advertisement1 from '../../assets/images/Advertisement/Advertisement1.jpg'
import Advertisement2 from '../../assets/images/Advertisement/Advertisement2.jpeg'

function Advertisement() {
  return (
    <div className="Advertisement">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Advertisement1} alt='summer sale'></img>
        </SwiperSlide>
        <SwiperSlide><img src={Advertisement2} alt='About us'></img></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Advertisement