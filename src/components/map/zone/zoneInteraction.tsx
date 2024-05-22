import { useContext, useEffect, useState } from "react";
import { MapContext } from "../mapContext";
import { Feature, MapBrowserEvent } from "ol";
import { Polygon } from "ol/geom";
import { Layer } from "ol/layer";
import { Style } from "ol/style";
import { FeatureLike } from "ol/Feature";

export default function zoneInteraction(
  layer: Layer,
  defaultStyle: Style,
  layerStyle: (feature: FeatureLike) => Style,
  checked: boolean,
) {
  const { map, secondaryLayers } = useContext(MapContext);
  const [activeZone, setActiveZone] = useState<Feature>();

  function handlePointerMove(event: MapBrowserEvent<MouseEvent>) {
    map.forEachFeatureAtPixel(
      event.pixel,
      (f) => setActiveZone(f as Feature<Polygon>),
      {
        layerFilter: (l) => l === layer,
      },
    );
  }

  useEffect(() => {
    if (layer === secondaryLayers[secondaryLayers.length - 1]) {
      activeZone?.setStyle(layerStyle(activeZone));
    }

    return () => activeZone?.setStyle(defaultStyle);
  }, [activeZone]);

  useEffect(() => {
    if (checked) {
      map?.on("pointermove", handlePointerMove);
    }

    return () => {
      setActiveZone(undefined);
      map?.un("pointermove", handlePointerMove);
    };
  }, [checked]);
}
