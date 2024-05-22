import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { Cluster } from "ol/source";
import { fireStStyle } from "./fireStyle";
import { useContext } from "react";
import { MapContext } from "../../../components/map/mapContext";

const FireStationLayer = () => {
  const { map } = useContext(MapContext);

  return new VectorLayer({
    source: new Cluster({
      distance: 100,
      source: new VectorSource({
        url: "fireStation.json",
        format: new GeoJSON(),
      }),
    }),
    style: (feature) => fireStStyle(feature, map),
  });
};

export default FireStationLayer;
