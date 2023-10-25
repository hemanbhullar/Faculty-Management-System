import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import education1 from './education1.webp'
import education2 from './education2.webp'
import education3 from './education3.jpg'

const HeroEdu = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'500px'}}>
      <Carousel.Item>
      <img src={education2} alt="" style={{width:'100%', height:'500px', borderRadius:'30px', padding:'20px 20px'}} />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={education1} alt=""   style={{width:'100%', height:'500px', borderRadius:'30px', padding:'20px 20px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={education3} alt=""   style={{width:'100%', height:'500px', borderRadius:'30px', padding:'20px 20px'}}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroEdu;