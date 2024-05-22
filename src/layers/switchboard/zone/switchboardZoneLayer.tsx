import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { defaultSwitchboardZone } from "./switchboardZoneStyle";

export const switchboardZoneLayer = new VectorLayer({
  className: "switchboardZone",
  source: new VectorSource({
    url: "switchboardZone.json",
    format: new GeoJSON(),
  }),
  style: defaultSwitchboardZone,
});
