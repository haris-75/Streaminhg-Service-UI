import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MovieList.scss';

function MovieList({ title, list }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [listObject, setListObject] = useState('');

  useEffect(() => {
    setListObject(
      list?.map(
        ({
          titleId,
          thumbnails: {
            'thumb-677x474': { url },
          },
        }) => (
          <div key={titleId}>
            <img alt={titleId} width={150} src={url} />
          </div>
        )
      )
    );
  }, [list]);

  return (
    <div className='movie-list-wrapper'>
      <p>{title}</p>
      <Carousel
        responsive={responsive}
        infinite
        slidesToSlide={5}
        customTransition={'transform 1500ms ease-in-out'}
      >
        {listObject}
      </Carousel>
    </div>
  );
}

export default MovieList;
