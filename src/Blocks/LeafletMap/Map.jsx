import React from 'react';

import config from '@plone/volto/registry';
import { MapContainer, TileLayer, useMap } from '@monsonjeremy/react-leaflet';
import 'leaflet-editable';
import RenderMarkers from './RenderMarkers';
import '../../style/leaflet.less';
import { EditableMap } from './EditableMap';

const Map = (props) => {
  const { data, editMode, onChangeField } = props;
  const center = [parseFloat(data.latitude), parseFloat(data.longitude)];
  const zoom = parseInt(data.zoom);
  const blockConfig = config.blocks.blocksConfig.leafletMap;

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
      {editMode ? (
        <EditableMap data={data} onChangeField={onChangeField} />
      ) : (
        <MapContainer center={center} zoom={zoom} style={{ height: '100%' }}>
          <MapControl center={center} zoom={zoom} />
          <TileLayer
            url={blockConfig.tilesLayerUrl}
            attribution={blockConfig.tilesLayerAttribution}
          />

          <RenderMarkers data={data} />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
