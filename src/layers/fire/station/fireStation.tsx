import React, { useEffect, useState, useContext } from "react";
import { useLayer } from "../../../components/map/useLayer";
import FireStationLayer from "./fireStationLayer";
import { MapContext } from "../../../components/map/mapContext";
import { fireStInteraction } from "./fireInteractions";

const FireStation = () => {
  const [checked, setChecked] = useState(false);
  const { map } = useContext(MapContext); // Use the useContext hook here

  const fireStationLayer = FireStationLayer(); // Call the function and assign its return value to a variable

  useLayer(fireStationLayer, checked);

  useEffect(() => {
    if (checked) {
      map.addLayer(fireStationLayer);
      fireStInteraction(map);
    }

    return () => {
      map.removeLayer(fireStationLayer);
    };
  }, [checked]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "  Hide" : "  Show"} fire stations
      </label>
    </div>
  );
};

export default FireStation;
