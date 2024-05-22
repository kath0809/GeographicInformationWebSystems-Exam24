import React, { useContext, useEffect } from "react";
import { Draw } from "ol/interaction";
import { MapContext } from "../mapContext";
import { drawingSource } from "./drawingLayer";
import { Feature } from "ol";
import { Polygon } from "ol/geom";

export function DrawPolygonButton() {
  const { map } = useContext(MapContext);

  const handleDrawPolygon = () => {
    const draw = new Draw({ type: "Polygon", source: drawingSource });

    draw.on("drawend", (e) => {
      const polygon = e.feature.getGeometry() as Polygon;
      const polygons = JSON.parse(localStorage.getItem("polygons") || "[]");

      polygons.push({ coordinates: polygon.getCoordinates() });

      localStorage.setItem("polygons", JSON.stringify(polygons));

      map.removeInteraction(draw);
    });

    map.addInteraction(draw);
  };

  useEffect(() => {
    const polygons: Array<{ coordinates: [number, number][][] }> = JSON.parse(
      localStorage.getItem("polygons") || "[]",
    );

    polygons.forEach(({ coordinates }) => {
      const newPolygon = new Polygon(coordinates);
      const newFeature = new Feature(newPolygon);

      drawingSource.addFeature(newFeature);
    });
  }, [localStorage.getItem("polygons")]);

  return (
    <button className={"btn btn-dark"} onClick={handleDrawPolygon}>
      Draw Polygon
    </button>
  );
}
