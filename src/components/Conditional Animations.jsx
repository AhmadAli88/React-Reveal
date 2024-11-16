import { useState } from 'react';
import Fade from 'react-reveal/Fade';

const ConditionalAnimation = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => setShow(!show)}>Toggle Animation</button>
      {show && <Fade><div>This text appears on toggle!</div></Fade>}
    </div>
  );
};

export default ConditionalAnimation;
