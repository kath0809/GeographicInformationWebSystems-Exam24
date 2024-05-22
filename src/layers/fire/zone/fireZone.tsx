import React, { useState } from "react";
import { useLayer } from "../../../components/map/useLayer";
import { fireZoneLayer } from "./fireZoneLayer";
import zoneInteraction from "../../../components/map/zone/zoneInteraction";
import { defaultFireZoneStyle, selectedFireZoneStyle } from "./fireZoneStyle";

export default function FireZone() {
  const [checked, setChecked] = useState(false);

  useLayer(fireZoneLayer, checked);

  zoneInteraction(
    fireZoneLayer,
    defaultFireZoneStyle(),
    selectedFireZoneStyle,
    checked,
  );

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "  Hide" : "  Show"} fire zones
      </label>
    </div>
  );
}
