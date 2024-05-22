import { useContext, useEffect } from "react";
import { throttle } from "lodash";
import { MapContext, overviewMapControl } from "../mapContext";

export default function OverviewMap() {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const handleViewChange = throttle(() => {
      const mainMapView = map.getView();
      const overviewMapView = overviewMapControl.getOverviewMap().getView();

      const newZoom = mainMapView?.getZoom()
        ? mainMapView.getZoom()! - 4
        : overviewMapView.getZoom();

      overviewMapView.setZoom(newZoom!);
    }, 300);

    map.getView().on("change", handleViewChange);

    return () => {
      map.getView().un("change", handleViewChange);
    };
  }, [map, overviewMapControl]);
}
