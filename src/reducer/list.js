import Slide1 from '../resourse/images/corousel_Images/homepage-2-slider-img-1.jpg';
import Slide2 from '../resourse/images/corousel_Images/homepage-2-slider-img-2.jpg';
import Slide3 from '../resourse/images/corousel_Images/homepage-2-slider-img-3.jpg';
import Slide4 from '../resourse/images/corousel_Images/homepage-2-slider-img-4.jpg';
import Slide5 from '../resourse/images/corousel_Images/homepage-2-slider-img-5.jpg';
import Slide6 from '../resourse/images/corousel_Images/homepage-2-slider-img-6.jpg';
import Slide7 from '../resourse/images/corousel_Images/homepage-2-slider-img-7.jpg';
import Slide8 from '../resourse/images/corousel_Images/homepage-2-slider-img-8.jpg';

const arr = [
  {
    src: Slide1,
    name: "Startseite",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
    timer: .5,
  },
  {
    src: Slide2,
    name: "Über Uns",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
    timer: .7,
  },
  {
    src: Slide3,
    name: "Kosmetik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
    timer: 1,
  },
  {
    src: Slide4,
    name: "BABOR",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4,
    timer: 1.2,
  },
  {
    src: Slide5,
    name: "Ästhetik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 5,
    timer: 1.5,
  },
  {
    src: Slide6,
    name: "Haarentfernung",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 6,
    timer: 1.7,
  },
  {
    src: Slide7,
    name: "Kryolipolyse",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 7,
    timer: 1.8,
  },
  {
    src: Slide8,
    name: "Zahnaufhellung",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 8,
    timer: 2,
  },
];
const list = (state = arr, action) => {
  switch (action.type) {
    case 'LIST':
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default list;