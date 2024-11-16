
import Zoom from 'react-reveal/Zoom';

const DelayedAnimation = () => (
  <Zoom delay={500}>
    <div style={{ textAlign: 'center', fontSize: '20px' }}>
      This zooms in after 500ms!
    </div>
  </Zoom>
);

export default DelayedAnimation;
