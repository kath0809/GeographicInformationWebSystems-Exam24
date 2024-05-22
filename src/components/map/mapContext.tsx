import { useGeographic } from "ol/proj";
import { Map, View } from "ol";
import React, { Dispatch, SetStateAction } from "react";
import { Layer } from "ol/layer";
import "ol/ol.css";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { OverviewMap, defaults as defaultControls } from "ol/control.js";
import {
  DragRotateAndZoom,
  defaults as defaultInteraction,
} from "ol/interaction";

useGeographic();

export const overviewMapControl = new OverviewMap({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
});

export const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  interactions: defaultInteraction().extend([new DragRotateAndZoom()]),
  view: new View({ center: [10, 62], zoom: 6 }),
});

export const MapContext = React.createContext<{
  map: Map;
  setSecondaryLayers: Dispatch<SetStateAction<Layer[]>>;
  setBaseLayer: Dispatch<SetStateAction<Layer>>;
  secondaryLayers: Layer[];
}>({
  map,
  setSecondaryLayers: () => {},
  setBaseLayer: () => {},
  secondaryLayers: [],
});
