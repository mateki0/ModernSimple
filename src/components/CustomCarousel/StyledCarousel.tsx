import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const StyledCarousel = styled(Carousel)`
&.slider {
  .slider-control-centerleft,
  .slider-control-centerright {
    opacity: 0;
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