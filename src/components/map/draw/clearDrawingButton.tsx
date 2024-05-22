import React from "react";
import { drawingSource } from "./drawingLayer";

export default function ClearDrawingButton() {
  function handleClearDrawing() {
    localStorage.removeItem("polygons");
    localStorage.removeItem("circles");
    drawingSource.clear();
  }

  return (
    <button className={"btn btn-dark"} onClick={handleClearDrawing}>
      Clear Drawing
    </button>
  );
}
