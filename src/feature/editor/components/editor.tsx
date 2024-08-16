"use client";

import React, { useEffect, useRef } from "react";
import { useEditor } from "../hooks/use-editor";
import { fabric } from "fabric";
const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      intialContainer: canvasRef.current!,
    });
  }, [init]);
  return (
    <div className="h-full flex flex-col ">
      <div className="h-full flex-1 bg-muted" ref={containerRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Editor;
