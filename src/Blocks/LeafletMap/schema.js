import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

export const ILeafletMarkerSchema = (intl) => ({
  title: intl.formatMessage(messages.marker),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'latitude', 'longitude', 'icon'],
    },
  ],

  properties: {
    title: {
      title: intl.formatMessage(messages.title),
      type: 'string',
    },
    latitude: {
      title: intl.formatMessage(messages.latitude),
      type: 'number',
    },
    longitude: {
      title: intl.formatMessage(messages.longitude),
      type: 'number',
    },
    icon: {
      title: intl.formatMessage(messages.icon),
      type: 'number',
      widget: 'icon_select',
    },
  },
  required: [],
});

export const ILeafletMapSchema = (intl) => ({
  title: intl.formatMessage(messages.map),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['latitude', 'longitude', 'zoom', 'tilesLayer'],
    },
    {
      id: 'content',
      title: intl.formatMessage(messages.content),
      fields: ['markers'],
    },
    {
      id: 'style',
      title: intl.formatMessage(messages.style),
      fields: ['height'],
    },
  ],

  properties: {
    latitude: {
      title: intl.formatMessage(messages.latitude),
      type: 'number',
      initialValue: 51.509865,
      maximum: 90,
      minimum: -90,
    },
    longitude: {
      title: intl.formatMessage(messages.longitude),
      type: 'number',
      initialValue: -0.118092,
      maximum: 180,
      minimum: -180,
    },
    zoom: {
      title: intl.formatMessage(messages.zoom),
      type: 'number',
      initialValue: 8,
      maximum: 18,
      minimum: 0,
    },
    tilesLayer: {
      title: intl.formatMessage(messages.tilesLayer),
      choices: config.blocks.blocksConfig.leafletMap.tileLayers.map((item) => {
        return [item.id, item.name];
      }),
    },
    height: {
      title: intl.formatMessage(messages.height),
      initialValue: '500px',
    },
    markers: {
      title: intl.formatMessage(messages.markers),
      schema: ILeafletMarkerSchema(intl),
      widget: 'object_list',
    },
  },
  required: [],
});

const messages = defineMessages({
  map: {
    id: 'Map',
    defaultMessage: 'Map',
  },
  latitude: {
    id: 'Latitude',
    defaultMessage: 'Latitude',
  },
  longitude: {
    id: 'Longitude',
    defaultMessage: 'Longitude',
  },
  zoom: {
    id: 'Zoom',
    defaultMessage: 'Zoom',
  },
  height: {
    id: 'Height',
    defaultMessage: 'Height',
  },
  icon: {
    id: 'Icon',
    defaultMessage: 'Icon',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  marker: {
    id: 'Marker',
    defaultMessage: 'Marker',
  },
  markers: {
    id: 'Markers',
    defaultMessage: 'Markers',
  },
  content: {
    id: 'Content',
    defaultMessage: 'Content',
  },
  style: {
    id: 'Style',
    defaultMessage: 'Style',
  },
  tilesLayer: {
    id: 'Tiles Layer',
    defaultMessage: 'Tiles layer',
  },
});
