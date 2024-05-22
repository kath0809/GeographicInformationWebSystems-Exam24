import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { defaultFireZoneStyle } from "./fireZoneStyle";

export const fireZoneLayer = new VectorLayer({
  className: "fireZone",
  source: new VectorSource({
    url: "fireZone.json",
    format: new GeoJSON(),
  }),
  style: defaultFireZoneStyle,
});
