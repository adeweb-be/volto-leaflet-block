import Marker from './Marker';
import React from 'react';

import { MapContainer, TileLayer, useMap } from '@monsonjeremy/react-leaflet';

import '../../style/leaflet.less';

const Map = (props) => {
  const { data } = props;
  const center = [parseFloat(data.latitude), parseFloat(data.longitude)];
  const zoom = parseInt(data.zoom);

  const MapControl = React.memo(({ center, zoom }) => {
    const map = useMap();
    if (!center[0] || !center[1] || !zoom) {
      return null;
    }
    map.flyTo(center, zoom);
    return null;
  });

  return (
    <div className="leaflet-wrapper" style={{ height: data.height }}>
      <MapContainer center={center} zoom={zoom} style={{ height: '100%' }}>
        <MapControl center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        {data.markers?.map((marker) => (
          <Marker key={marker['@id']} marker={marker} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
