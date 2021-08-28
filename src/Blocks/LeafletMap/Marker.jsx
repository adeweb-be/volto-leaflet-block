import React from 'react';
import config from '@plone/volto/registry';
import L from 'leaflet';
import { Marker as LeafletMarker } from '@monsonjeremy/react-leaflet';

const Marker = (props) => {
  const { marker } = props;
  const { icon: iconId, latitude, longitude } = marker;

  const markersIcons = config.blocks.blocksConfig.leafletMap.markerIcons;

  const icon = markersIcons[iconId]
    ? markersIcons[iconId].icon
    : markersIcons['default'].icon;

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

  if (latitude && longitude) {
    return (
      <LeafletMarker icon={leafletIcon} position={[latitude, longitude]} />
    );
  }
  return null;
};

export default Marker;
