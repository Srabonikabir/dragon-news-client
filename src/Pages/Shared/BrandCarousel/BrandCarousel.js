import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/breaking-news-blue-600.jpg'
import Brand2 from '../../../assets/brands/_129544071_untitledpresentation.jpg'
import Brand3 from '../../../assets/brands/News.jpg'
const BrandCarousel = () => {
    return (
            <Carousel>

              <Carousel.Item>
                <img className="d-block w-100"
                 src={Brand1}
                 alt="First slide" />
               
               
              </Carousel.Item>



              <Carousel.Item>
              <img className="d-block w-100"
                 src={Brand2}
                 alt="second Slid" />
               
              </Carousel.Item>

              <Carousel.Item>
              <img className="d-block w-100"
                 src={Brand3}
                 alt="Third slide" />
                
              </Carousel.Item>
            </Carousel>
    );
};

export default BrandCarousel;