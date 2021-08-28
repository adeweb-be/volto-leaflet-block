# Volto Leaflet Block

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

### AsDefault
```JSON
"addons": [
"@adeweb-be/volto-leaflet-block:asDefault"
],
```
This will install the base config and will replace the default map block
which is based on a Google Map iframe.


## Roadmap

- Add Cypress tests
- Better coordinates widget (it's a bit clunky for now)
- Change map tiles source on the edit view
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