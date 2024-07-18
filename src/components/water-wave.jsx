import PropTypes from "prop-types";

import WaterWave from "react-water-wave";
const WaterWaveWrapper = ({
  children,
  dropRadius,
  perturbance,
  resolution,
}) => {
  return (
    <div>
      <WaterWave
        imageUrl=""
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}
      >
        {() => children}
      </WaterWave>
    </div>
  );
};

WaterWaveWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dropRadius: PropTypes.number.isRequired,
  perturbance: PropTypes.number.isRequired,
  resolution: PropTypes.number.isRequired,
};

export default WaterWaveWrapper;
