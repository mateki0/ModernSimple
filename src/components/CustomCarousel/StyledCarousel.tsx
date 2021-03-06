import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const StyledCarousel = styled(Carousel)`

&.slider {
  .slider-control-centerleft,
  .slider-control-centerright {
    opacity: 0;
  }
  .slider-control-bottomcenter{
      width:100%;
  }
  .slider-control-bottomcenter ul{
    opacity:0;
    visibility:hidden;
  }
}
@media only screen and (min-width: 1024px) {
&.slider{
  .slider-control-bottomcenter ul{
    opacity:1;
    visibility:visible;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
  }
}
}
&:hover {
  .slider-control-centerleft,
  .slider-control-centerright {
    opacity: 1;
  }
}
`
export default StyledCarousel;