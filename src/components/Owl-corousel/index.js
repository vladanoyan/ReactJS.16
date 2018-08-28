import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Src from '../../resourse/images/Larima_NEW_LOGO.png';
import './component.css';


const options = {
  loop: true,
  autoplay: true,
  margin: 0,
  slideBy: 1,
  dotsEach: true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    800:{
      items:3
    },
    1000:{
      items:4
    },
  }
};
class Owlcarousel extends Component {

  direct(name, id) {
    this.props.animate(name, id);
  };
  render() {
    return (
      <div className={this.props.toggle ? 'duration' : 'downFade duration'}>
        <div className="logo">
          <img src={Src} alt="logo"/>
        </div>
        <OwlCarousel
          className='owl-theme'
          {...options}
        >
          {
            this.props.items.map((item, index)=>{
              return(
                <div className="downMenu" style={{animationDuration: `${item.timer}s`}} key={index}>
                  <div className="item img" >
                    <img src={item.src} alt={item.name}/>
                    <div className="discription">
                      <h1><p onClick={this.direct.bind(this, item.name, item.id)} className="link">{item.name}</p></h1>
                      <p className="text-white">{item.text}</p>
                      <div className="separator" />
                    </div>
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

export default Owlcarousel;