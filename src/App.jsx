import './App.css';
import ScrollAnimation from './components/Animating Visibility on Scroll';
import DelayedAnimation from './components/Animation Delays';
import FadeExample from './components/Basic Fade Animation';
import CascadingExample from './components/Cascading Animations';
import ConditionalAnimation from './components/Conditional Animations';
import FlashExample from './components/Flash Animation';
import InfiniteAnimation from './components/Infinite Animations';
import SlideExample from './components/Slide Animation';
import ZoomExample from './components/Zoom Animation';

function App() {
  return (
    <div>
      <FadeExample />
      <ZoomExample/>
      <SlideExample/>
      <CascadingExample/>
      <ConditionalAnimation/>
      <ScrollAnimation/>
      <DelayedAnimation/>
      <FlashExample/>
      <InfiniteAnimation/>
    </div>
  );
}

export default App;
