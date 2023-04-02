import Marker from './Marker';
import { Popup } from '@monsonjeremy/react-leaflet';

const RenderMarkers = (props) => {
  const { data } = props;

  return data.markers?.map((marker) => (
    <Marker key={marker['@id']} marker={marker}>
      <Popup>{marker.title}</Popup>
    </Marker>
  ));
};

export default RenderMarkers;
