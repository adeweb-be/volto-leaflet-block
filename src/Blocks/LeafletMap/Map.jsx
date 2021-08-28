import React from 'react';

import config from '@plone/volto/registry';
import { MapContainer, TileLayer, useMap } from '@monsonjeremy/react-leaflet';

import Marker from './Marker';
import '../../style/leaflet.less';

const Map = (props) => {
  const { data } = props;
  const center = [parseFloat(data.latitude), parseFloat(data.longitude)];
  const zoom = parseInt(data.zoom);
  const blockConfig = config.blocks.blocksConfig.leafletMap

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
          url={blockConfig.tilesLayerUrl}
          attribution={blockConfig.tilesLayerAttribution}
        />
        {data.markers?.map((marker) => (
          <Marker key={marker['@id']} marker={marker} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
