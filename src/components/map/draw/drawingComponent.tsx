import { DrawCircleButton } from "./drawCircleButton";
import { DrawPolygonButton } from "./drawPolygonButton";
import ClearDrawingButton from "./clearDrawingButton";
import React from "react";

export default function DrawingComponent() {
  return (
    <div>
      <DrawCircleButton />
      <DrawPolygonButton />
      <ClearDrawingButton />
    </div>
  );
}
