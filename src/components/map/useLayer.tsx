import { useContext, useEffect } from "react";
import { Layer } from "ol/layer";
import { MapContext } from "./mapContext";

export function useLayer(layer: Layer, checked: boolean) {
  const { setSecondaryLayers } = useContext(MapContext);

  useEffect(() => {
    if (checked) {
      setSecondaryLayers((old) => [...old, layer]);
    }
    return () => {
      setSecondaryLayers((old) => old.filter((l) => l !== layer));
    };
  }, [checked]);
}
