import React, { useState } from "react";
import { useLayer } from "../../../components/map/useLayer";
import { switchboardZoneLayer } from "./switchboardZoneLayer";
import {
  defaultSwitchboardZone,
  selectedSwitchboardZone,
} from "./switchboardZoneStyle";
import zoneInteraction from "../../../components/map/zone/zoneInteraction";

export default function SwitchboardZone() {
  const [checked, setChecked] = useState(false);

  useLayer(switchboardZoneLayer, checked);

  zoneInteraction(
    switchboardZoneLayer,
    defaultSwitchboardZone(),
    selectedSwitchboardZone,
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
        {checked ? "  Hide" : "  Show"} switchboard zone
      </label>
    </div>
  );
}
