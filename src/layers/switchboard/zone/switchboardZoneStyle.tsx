import { Fill, Stroke, Style, Text } from "ol/style";
import { FeatureLike } from "ol/Feature";

export function defaultSwitchboardZone() {
  return new Style({
    stroke: new Stroke({
      color: "rgba(0,0,255,0.4)",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(0,0,255,0.1)",
    }),
  });
}

export function selectedSwitchboardZone(feature: FeatureLike) {
  return new Style({
    stroke: new Stroke({
      color: "rgba(0,0,255,0.4)",
      width: 5,
    }),
    fill: new Fill({
      color: "rgba(0,0,0,0)",
    }),
    text: new Text({
      text: feature.get("navn"),
      overflow: true,
      font: "bold 15px sans-serif",
      fill: new Fill({ color: "black" }),
      stroke: new Stroke({ color: "white", width: 5 }),
    }),
  });
}
