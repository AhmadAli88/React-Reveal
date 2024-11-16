
import Fade from 'react-reveal/Fade';

const ScrollAnimation = () => (
  <div>
    <Fade>
      <div style={{ marginTop: '100vh', textAlign: 'center' }}>
        This appears as you scroll!
      </div>
    </Fade>
  </div>
);

export default ScrollAnimation;
