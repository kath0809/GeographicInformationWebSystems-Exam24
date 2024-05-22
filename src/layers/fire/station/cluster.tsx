import { FeatureLike } from "ol/Feature";
import { map } from "../../../components/map/mapContext";
import { clusterStyle } from "./clusterStyle";
import { Style } from "ol/style";

export const fireStCluster = (feature: FeatureLike): Style => {
  const size = feature.get("features").length;
  const zoom = map.getView().getZoom() || 1;
  const radius = (200 + size * 3) / zoom;

  return clusterStyle(radius, size);
};
