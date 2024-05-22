import { useContext, useEffect, useState } from "react";
import { Feature, MapBrowserEvent } from "ol";
import { FeatureLike } from "ol/Feature";
import { switchboardStationLayer } from "./switchboardStationLayer";
import {
  selectedSwitchboardStyle,
  switchBoardIcon,
} from "./switchBoardStationStyle";
import { MapContext } from "../../../components/map/mapContext";

export default function switchboardInteraction(checked: boolean) {
  const { map } = useContext(MapContext);
  const [activeSwitchboardStation, setActiveSwitchboardStation] =
    useState<Feature>();

  function handlePointerMove(event: MapBrowserEvent<MouseEvent>) {
    const selectedSwitchboardStations: FeatureLike[] = [];

    map.forEachFeatureAtPixel(
      event.pixel,
      (f) => selectedSwitchboardStations.push(f),
      {
        hitTolerance: 8,
        layerFilter: (l) => l === switchboardStationLayer,
      },
    );

    if (selectedSwitchboardStations.length > 0) {
      setActiveSwitchboardStation(selectedSwitchboardStations[0] as Feature);
    } else {
      setActiveSwitchboardStation(undefined);
    }
  }

  useEffect(() => {
    if (checked) {
      activeSwitchboardStation?.setStyle(selectedSwitchboardStyle);
    }

    return () => {
      activeSwitchboardStation?.setStyle(switchBoardIcon);
    };
  }, [activeSwitchboardStation]);

  useEffect(() => {
    if (checked) {
      map?.on("pointermove", handlePointerMove);
    }

    return () => {
      map?.un("pointermove", handlePointerMove);
    };
  }, [checked]);
}
