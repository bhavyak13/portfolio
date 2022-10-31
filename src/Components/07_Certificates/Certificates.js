import React from 'react'
import certificates from './CertificatesHelper'
import './Certificates.css'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';


const Certificates = () => {
  return (
    <section id="Certificate">
      <h5>proud to achieve</h5>
      <h2>Certificates</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='container Certificates__container'
      >
        {certificates.map(({ url, title, img, company }, i) => (
          <SwiperSlide className='Certificate' key={i}>
            <div className='Certificate-head'>
              <h3>{title}</h3>
              <p>Issued by : {company}</p>
            </div>
            <div className='Certificate-img'>
              <a href={url} target="_blank" rel='noreferrer'>
                <img src={img} alt='cartificate' />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Certificates