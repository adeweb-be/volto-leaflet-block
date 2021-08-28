import { defineMessages } from 'react-intl';

import IconSelectWidget from './Widgets/IconSelect';
import { LeafletMapView, LeafletMapEdit } from './Blocks';
import globeSVG from '@plone/volto/icons/globe.svg';
import mapSVG from './icons/map.svg';
import dangerSVG from './icons/danger.svg';
import parkingSVG from './icons/parking.svg';
import infoSVG from './icons/info.svg';
import flagSVG from './icons/flag.svg';

import './style/leaflet.less';

defineMessages({
  leafletMap: {
    id: 'leafletMap',
    defaultMessage: 'Leaflet map',
  },
});

const iconsPreset = {
  parking: {
    id: 'parking',
    icon: parkingSVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  danger: {
    id: 'danger',
    icon: dangerSVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  info: {
    id: 'info',
    icon: infoSVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
  flag: {
    id: 'flag',
    icon: flagSVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
};

const leafletMapConfig = {
  id: 'leafletMap',
  title: 'Leaflet map',
  icon: globeSVG,
  group: 'common',
  view: LeafletMapView,
  edit: LeafletMapEdit,
  restricted: false,
  mostUsed: false,
  blockHasOwnFocusManagement: false,
  sidebarTab: 1,
  markerIcons: {
    default: {
      id: 'default',
      icon: mapSVG,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    },
  },
};

export function minimal(config) {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    leafletMap: leafletMapConfig,
  };
  config.widgets.widget.icon_select = IconSelectWidget;

  return config;
}

export default function baseInstall(config) {
  config = minimal(config);

  config.blocks.blocksConfig.leafletMap.markerIcons = {
    ...config.blocks.blocksConfig.leafletMap.markerIcons,
    ...iconsPreset,
  };

  return config;
}

export function asDefault(config) {
  config = baseInstall(config);

  config.blocks.blocksConfig.maps = config.blocks.blocksConfig.leafletMap;
  delete config.blocks.blocksConfig.leafletMap;

  return config;
}
