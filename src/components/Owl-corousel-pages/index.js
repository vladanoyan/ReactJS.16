import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './component.css';

class OwlcarouselPages extends Component {
constructor(){
  super();
  this.state={
    position: '',
  }
}
  render() {
    const options = {
      loop: true,
      autoplay: true,
      margin: 0,
      slideBy: 1,
      dotsEach: true,
      animateOut: 'fadeOutLeft',
      touchDrag: true,
      startPosition: this.props.position - 1,
      responsive:{
        0:{
          items:1
        },
      }
    };

    return (
      <div className="OwlcarouselPages">
        <OwlCarousel
          className='owl-theme'
          {...options}
        >
          {
            this.props.items.map((item, index)=>{
              return(
                <div className="" style={{animationDuration: `${item.timer}s`}} key={index}>
                  <div className="item imgPages" >
                    <img src={item.src} alt={item.name}/>
                  </div>
                </div>
              )
            })
          }
        </OwlCarousel>
      </div>
    );
  }
}

export default OwlcarouselPages;