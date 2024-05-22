import { Group } from "ol/layer";
import TileLayer from "ol/layer/Tile";
import { OSM, StadiaMaps } from "ol/source";

export const watercolorGroup = new Group({
  layers: [
    new TileLayer({
      source: new StadiaMaps({
        layer: "stamen_watercolor",
        apiKey: "3c3bd333-4302-4825-acc2-c4b3b0df32e4",
      }),
    }),
    new TileLayer({
      source: new StadiaMaps({
        layer: "stamen_terrain_labels",
        apiKey: "3c3bd333-4302-4825-acc2-c4b3b0df32e4",
      }),
    }),
  ],
});
/*  WatercolorGroup er en gruppe for å vise først StadiaMaps med layer: "stamen_watercolor" og deretter StadiaMaps med layer: "stamen_terrain_labels".
Dette gjør det mulig å vise terreng laget oppå watercolor laget.*/

export const baseLayerOptions = [
  {
    id: "osm",
    name: "Open Street Map",
    layer: new TileLayer({ source: new OSM() }),
  },
  {
    id: "stadia_group",
    name: "Watercolor",
    layer: watercolorGroup,
  },
  {
    id: "stadia_dark",
    name: "Dark Mode",
    layer: new TileLayer({
      source: new StadiaMaps({
        layer: "alidade_smooth_dark",
        apiKey: "9ea95326-d135-4317-9b99-e1d58534a942",
      }),
    }),
  },
  {
    id: "stadia_toner",
    name: "Toner",
    layer: new TileLayer({
      source: new StadiaMaps({
        layer: "stamen_toner",
        apiKey: "9ea95326-d135-4317-9b99-e1d58534a942",
      }),
    }),
  },
];
