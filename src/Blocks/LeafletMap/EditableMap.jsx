import {
  MapContainer,
  Marker as LeafletMarker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from '@monsonjeremy/react-leaflet';
import config from '@plone/volto/registry';
import 'leaflet-editable';
import { useRef, useState } from 'react';
import ReactLeafletEditable from 'react-leaflet-editable';
import '../../style/leaflet.less';
import L from 'leaflet';
import { v4 as uuid } from 'uuid';
import RenderMarkers from './RenderMarkers';
import { Button } from 'semantic-ui-react';

const EditableMap = (props) => {
  const { data, onChangeField } = props;
  const center = [parseFloat(data.latitude), parseFloat(data.longitude)];
  const zoom = parseInt(data.zoom);
  const editRef = useRef();
  const [map, setMap] = useState();
  const blockConfig = config.blocks.blocksConfig.leafletMap;
  const MapControl = React.memo(({ center, zoom }) => {
    const map = useMap();
    if (!center[0] || !center[1] || !zoom) {
      return null;
    }
    map.flyTo(center, zoom);
    return null;
  });

  const markersIcons = config.blocks.blocksConfig.leafletMap.markerIcons;
  const icon = markersIcons['default'].icon;
  const iconHtml = `
    <svg
      xmlns="${icon.attributes && icon.attributes.xmlns}"
      viewBox="${icon.attributes && icon.attributes.viewBox}"
    >
      ${icon.content}
    </svg>`;

  const leafletIcon = L.divIcon({
    html: iconHtml,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const addMarker = (latlng) => {
    const markers = data?.markers ? [...data.markers] : [];
    markers.push({
      '@id': uuid(),
      title: 'New Marker',
      latitude: latlng.lat,
      longitude: latlng.lng,
      icon: 'default',
    });
    onChangeField('markers', markers);
  };

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        addMarker(e.latlng);
      },
    });

    return position === null ? null : (
      <LeafletMarker position={position} icon={leafletIcon}>
        <Popup>You are here</Popup>
      </LeafletMarker>
    );
  };

  return (
    <ReactLeafletEditable ref={editRef} map={map}>
      <MapContainer
        editable={true}
        zoom={zoom}
        center={center}
        whenCreated={setMap}
        style={{ height: '100%' }}
      >
        <MapControl center={center} zoom={zoom} />

        <LocationMarker />
        <RenderMarkers data={data} />
        <TileLayer
          url={blockConfig.tilesLayerUrl}
          attribution={blockConfig.tilesLayerAttribution}
        />
      </MapContainer>
    </ReactLeafletEditable>
  );
};

export { EditableMap };
