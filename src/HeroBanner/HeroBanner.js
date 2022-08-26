import React, { useEffect, useState, useRef } from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Fab from '@material-ui/core/Fab';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
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
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
      <div className='hero-banner-action-button-container'>
        <Fab
          className='hero-banner-action-button banner-left-btn'
          size='small'
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIos />
        </Fab>
        <Fab
          className='hero-banner-action-button banner-right-btn'
          size='small'
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <ArrowForwardIos />
        </Fab>
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
        width: '100%',
        height: 300,
        userSelect: 'none',
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
