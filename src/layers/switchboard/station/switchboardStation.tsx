import React, { useState } from "react";
import { useLayer } from "../../../components/map/useLayer";
import { switchboardStationLayer } from "./switchboardStationLayer";
import switchboardInteraction from "./switchboardInteraction";

export default function SwitchboardStation() {
  const [checked, setChecked] = useState(false);

  useLayer(switchboardStationLayer, checked);

  switchboardInteraction(checked);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "  Hide" : "  Show"} switchboard stations
      </label>
    </div>
  );
}
