import React from "react";
import styles from "../../styles/component-styles/Home-styles/People.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

// import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className={styles.carouselDesc}>
          <p>
            Food is prepared perfectly. Makes meal prepping more convenient and
            saves time. Taste great. Highly recommend.
          </p>
          <h4>~Rhett Majoria</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselDesc}>
          <p>
            I have always been so impressed with everything we have ever had
            from here. Both quality and taste!!! ~Emily Hoskins I can not say
            enough good things about this place, friendly and inviting staff
            that are happy to answer any questions you might have, grab and go
            meals that will leave you feeling great. Not to mention I spend less
            money here than at any fast food place. ~Nick Pierce Food is
            prepared perfectly. Makes meal prepping more convenient and saves
            time. Taste great. Highly recommend.
          </p>
          <h4>~Monique Encala</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselDesc}>
          <p>
            I can not say enough good things about this place, friendly and
            inviting staff that are happy to answer any questions you might
            have, grab and go meals that will leave you feeling great. Not to
            mention I spend less money here than at any fast food place. Nick
            Pierce Food is prepared perfectly. Makes meal prepping more
            convenient and saves time. Taste great. Highly recommend.
          </p>
          <h4>~Emili Hoskins</h4>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

// export default DarkVariantExample;

const PeopleSaying = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className="text-center">What people are saying?</h1>
        <DarkVariantExample />
      </div>
    </div>
  );
};

export default PeopleSaying;
