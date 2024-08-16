import { useCallback } from "react";
import { fabric } from "fabric";
import { prototype } from "events";

export const useEditor = () => {
  const init = useCallback(
    ({
      initialCanvas,
      intialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      intialContainer: HTMLDivElement;
    }) => {
        fabric.Object.prototype.set({
            cornerColor: "#FFF",
            cornerStyle: "circle",
            borderColor: "#3b82fd",
            borderScaleFactor: 1.5,
            transparentCorners: false,
            borderOpacityWhenMoving: 1,
            cornerStrokeColor: "#3b82f6"
        })

      const intialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        // selectable: false,
        // hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(intialContainer.offsetWidth);
      initialCanvas.setHeight(intialContainer.offsetHeight);

      initialCanvas.add(intialWorkspace);
      initialCanvas.centerObject(intialWorkspace);
      initialCanvas.clipPath = intialWorkspace;

      const test = new fabric.Rect({
        width: 100,
        height: 100,
        fill:"black"
      })

      initialCanvas.add(test)
      initialCanvas.centerObject(test)
    },
    []
  );

  return { init };
};
