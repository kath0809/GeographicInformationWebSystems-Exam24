import React, { useContext, useEffect } from "react";
import { Draw } from "ol/interaction";
import { MapContext } from "../mapContext";
import { drawingSource } from "./drawingLayer";
import { Feature } from "ol";
import { Circle as CircleGeom } from "ol/geom";

export function DrawCircleButton() {
  const { map } = useContext(MapContext);

  const handleDrawCircle = () => {
    const draw = new Draw({ type: "Circle", source: drawingSource });

    draw.on("drawend", (e) => {
      const circle = e.feature.getGeometry() as CircleGeom;
      const circles = JSON.parse(localStorage.getItem("circles") || "[]");

      //Convert to meters
      const metersPerUnit = map.getView().getProjection().getMetersPerUnit();
      const newRadius = circle.getRadius() * metersPerUnit!;

      circles.push({ center: circle.getCenter(), radius: newRadius });

      localStorage.setItem("circles", JSON.stringify(circles));

      map.removeInteraction(draw);
    });

    map.addInteraction(draw);
  };

  useEffect(() => {
    const circles: Array<{ center: [number, number]; radius: number }> =
      JSON.parse(localStorage.getItem("circles") || "[]");

    circles.forEach(({ center, radius }) => {
      const newCircle = new CircleGeom(center, radius);
      const newFeature = new Feature(newCircle);

      drawingSource.addFeature(newFeature);
    });
  }, [localStorage.getItem("circles")]);

  return (
    <button className={"btn btn-dark"} onClick={handleDrawCircle}>
      Draw Circle
    </button>
  );
}
