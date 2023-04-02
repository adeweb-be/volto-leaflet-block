# Volto Leaflet Block

![screenshot](https://user-images.githubusercontent.com/9050997/131230905-9c5fe07c-834b-4e88-a031-387ee8d59b6e.png)

## Overview

This package adds a new map block based on [Leaflet](https://github.com/Leaflet/Leaflet) and [React Leaflet](https://github.com/PaulLeCam/react-leaflet).

## Features

- Display a Leaflet map as a block
- Set the map default center (based on latitude and longitude) and zoom
- Add some markers on the map

## Profiles
In your `package.json` file:
### Minimal
```JSON
"addons": [
  "@adeweb-be/volto-leaflet-block:minimal"
],
```
This will install the minimum config for this addon.

### Base
```JSON
  "addons": [
    "@adeweb-be/volto-leaflet-block"
  ],
```
This will install the minimum config + some preset markers.

## Custom tiles

The block provides several base tile layers and offers a dropdown to select one to be used in your map.

Moreover, the list of available base tile layers can be configured by the integrator, modifying the corresponding
configuration setting in your Volto project:

```JSON
config.blocksConfig.leafletMap.tileLayers = [
  {
    id: 'some-unique-id',
    name: 'Name to be shown in the drop down',
    url: 'https://url.of.the.tile.layer.service/{z}/{x}/{y}.png',
    attribution: 'Attribution string'
  }
]


```

## Roadmap

- Add Cypress tests
- Better coordinates widget (it's a bit clunky for now)
- More preset icons
- Better icon select widget (it's fine for a few icons but if you have hundred of them it's a mess)
- Draw path on the map (maybe, it seems difficult)


## Known issues
### Improper dependency for [React Leaflet](https://github.com/PaulLeCam/react-leaflet)

Currently, react-leaflet v3.x doesn't support Webpack v4, so we depend on [@monsonjeremy/react-leaflet](https://www.npmjs.com/package/@monsonjeremy/react-leaflet)
which is compatible with Webpack v4.

See here : https://github.com/PaulLeCam/react-leaflet/pull/885

When this gets merged (hopefully) we'll use the correct package.

## Translations

This addon has been translated into

- English
- French

## Install

If you already have a Volto project, just update `package.json`:

```JSON
"addons": [
  "@adeweb-be/volto-leaflet-block"
],

"dependencies": {
  "@adeweb-be/volto-leaflet-block": "*"
}
```

Install new add-on and restart Volto:

```shell
yarn install
yarn start
```

Go to http://localhost:3000

## Demo


https://user-images.githubusercontent.com/9050997/131229005-6a6fab3f-5ce9-4e0a-8ebd-a1a6b054aa19.mp4

