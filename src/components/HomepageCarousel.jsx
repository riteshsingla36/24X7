import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomepageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          style={{ height: "300px", objectFit: "cover" }}
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={{cursor: 'pointer'}} to='product-details'>
            <h3>First slide label</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          style={{ height: "300px", objectFit: "cover" }}
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: 'pointer'}} to='product-details'>
            <h3>Second slide label</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          style={{ height: "300px", objectFit: "cover" }}
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={{cursor: 'pointer'}} to='product-details'>
            <h3>Third slide label</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomepageCarousel;
