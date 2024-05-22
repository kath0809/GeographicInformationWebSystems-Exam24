import { getIconStyle } from "../../base/getIcon";
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { Circle, Style } from "ol/style";
import { FeatureLike } from "ol/Feature";

export const switchBoardIcon = getIconStyle("sos.png");

export const selectedSwitchboardStyle = (feature: FeatureLike) => {
  return new Style({
    image: new Circle({
      stroke: new Stroke({
        color: "rgb(255, 0, 0)",
        width: 4,
      }),
      fill: new Fill({
        color: "white",
      }),
      radius: 8,
    }),
    text: new Text({
      text: feature.get("navn"),
      offsetY: -13,
      font: "bold 15px sans-serif",
      fill: new Fill({
        color: "black",
      }),
      stroke: new Stroke({
        color: "white",
        width: 5,
      }),
    }),
  });
};
