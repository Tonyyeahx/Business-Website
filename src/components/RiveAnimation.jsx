import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import PropTypes from 'prop-types';

/**
 * RiveAnimation Component
 * 
 * A reusable component for displaying Rive animations
 * 
 * @param {string} src - Path to the .riv file (relative to public folder)
 * @param {string} stateMachines - Name of the state machine to use (optional)
 * @param {boolean} autoplay - Whether to autoplay the animation (default: true)
 * @param {object} style - Custom styles for the canvas container
 * @param {string} className - Custom CSS class name
 * @param {function} onLoad - Callback when animation loads
 */
function RiveAnimation({ 
  src, 
  stateMachines, 
  autoplay = true, 
  style = {}, 
  className = '',
  onLoad 
}) {
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines,
    autoplay,
    onLoad: () => {
      if (onLoad) onLoad(rive);
    },
  });

  return (
    <div className={`rive-container ${className}`} style={style}>
      <RiveComponent />
    </div>
  );
}

RiveAnimation.propTypes = {
  src: PropTypes.string.isRequired,
  stateMachines: PropTypes.string,
  autoplay: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  onLoad: PropTypes.func,
};

export default RiveAnimation;

