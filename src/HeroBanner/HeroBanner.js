import React, { useEffect, useState, useRef } from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import './HeroBanner.scss';

export default function HeroBanner({ list }) {
  const [data, setData] = useState('');
  const [intervalId, setIntervalId] = useState('');

  useEffect(() => {
    setData(
      list?.map(
        ({
          titleId,
          thumbnails: {
            'thumb-613x1536': { url },
          },
        }) => ({
          cover: url,
          title: titleId,
        })
      )
    );

    const intervalId = setInterval(() => {
      ref.current.goNext(6);
    }, 3000);

    setIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, [list]);
  const ref = useRef();
  const addEvent = () => {
    const intervalId = setInterval(() => {
      ref.current.goNext(6);
    }, 3000);

    setIntervalId(intervalId);
  };
  const removeEvent = () => {
    clearInterval(intervalId);
  };
  return (
    <div
      className='stacked-container-wrapper'
      style={{ width: '100%', position: 'relative' }}
      onMouseEnter={removeEvent}
      onMouseLeave={addEvent}
    >
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 1;
          if (parentWidth <= 1440 && parentWidth > 949) currentVisibleSlide = 3;
          if (parentWidth <= 949) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
            />
          );
        }}
      />
      <div className='hero-banner-action-button-container'>
        <button
          onClick={() => {
            ref.current?.goBack();
          }}
          className='fas custom-arrow-btn'
        >
          &#xf104;
        </button>
        <button
          onClick={() => {
            ref.current?.goNext(6);
          }}
          className='fas custom-arrow-btn'
        >
          &#xf105;
        </button>
      </div>
    </div>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        userSelect: 'none',
        width: '100%',
        height: 300,
      }}
      className='my-slide-component'
    >
      <img
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: 0,
        }}
        alt={cover}
        draggable={false}
        src={cover}
      />
    </div>
  );
});
