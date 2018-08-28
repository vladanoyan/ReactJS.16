import React, { Component } from 'react';
import cs from './owl.css';

// import $ from 'jquery';

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
  componentDidMount(){
    $('.owl-carousel').owlCarousel(
      {
        loop: true,
        autoplay: true,
        margin: 0,
        slideBy: 1,
        dotsEach: true,
        nav: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          800:{
            items:1
          },
          1000:{
            items:1
          },
        }
      }
    )

  }


  direct(name, id) {
    this.props.animate(name, id);
  };

  render() {

    return (
      <div>
        <div className={this.props.toggle ? `${cs.duration}` : `${cs.duration} ${cs.downFade}`}>
          <div className={cs.logo}>
            <img src="/static/images/Larima_NEW_LOGO.png" alt="logo" />
          </div>
          <div className="owl-carousel owl-theme" {...options}>
            {
              this.props.items.map((item, index)=>{
                return(
                  <div className={cs.downMenu} style={{animationDuration: `${item.timer}s`}} key={index}>
                    <div className="item" id={cs.img} >
                      <img src={item.src} alt={item.name}/>
                      <div className={cs.discription}>
                        <h1><p onClick={this.direct.bind(this, item.name, item.id)} className={cs.link}>{item.name}</p></h1>
                        <p className={cs.textWhite}>{item.text}</p>
                        <div className={cs.separator} />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Owlcarousel;