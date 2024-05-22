import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { switchBoardIcon } from "./switchBoardStationStyle";

export const switchboardStationLayer = new VectorLayer({
  className: "switchboardStation",
  source: new VectorSource({
    url: "switchboardStation.json",
    format: new GeoJSON(),
  }),
  style: switchBoardIcon,
});
