import { Circle as CircleStyle, Fill, Stroke, Style, Text } from "ol/style";

export const clusterStyle = (radius: number, size: number): Style => {
  return new Style({
    image: new CircleStyle({
      radius: radius,
      stroke: new Stroke({
        color: "#fff",
      }),
      fill: new Fill({
        color: "rgba(255,103,103,0.71)",
      }),
    }),
    text: new Text({
      text: size.toString(),
      fill: new Fill({
        color: "#fff",
      }),
    }),
  });
};
