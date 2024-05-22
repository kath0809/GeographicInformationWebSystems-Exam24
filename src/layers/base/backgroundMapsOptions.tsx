import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "../../components/map/mapContext";
import { Layer } from "ol/layer";
import { Source } from "ol/source";
import LayerRenderer from "ol/renderer/Layer";
import { baseLayerOptions } from "./backgroundMaps";

export function BackgroundMapsOptions() {
  const { setBaseLayer } = useContext(MapContext);

  const [selectedLayer, setSelectedLayer] = useState(baseLayerOptions[0]);

  useEffect(
    () =>
      setBaseLayer(
        () => selectedLayer.layer as Layer<Source, LayerRenderer<any>>,
      ),
    [selectedLayer],
  );

  return (
    <div>
      <select
        onChange={(e) =>
          setSelectedLayer(
            baseLayerOptions.find((l) => l.id === e.target.value)!,
          )
        }
        value={selectedLayer.id}
      >
        {baseLayerOptions.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
