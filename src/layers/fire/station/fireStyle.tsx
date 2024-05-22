import Map from "ol/Map"; // Import Map class from OpenLayers
import { FeatureLike } from "ol/Feature";
import { Icon, Style } from "ol/style";
import { fireStCluster } from "./cluster";

const fireStationStyle = new Style({
  image: new Icon({
    src: "./fire-station.png",
    scale: 0.09,
  }),
});

export const fireStStyle = function (feature: FeatureLike, map: Map) {
  const zoom = map.getView().getZoom();
  const features = feature.get("features");
  if (zoom !== undefined && zoom >= 10 && features.length === 1) {
    return fireStationStyle;
  }
  return fireStCluster(feature);
};
