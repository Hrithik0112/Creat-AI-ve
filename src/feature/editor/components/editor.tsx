"use client";

import React, { useEffect, useRef } from "react";
import { useEditor } from "../hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";

const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      intialContainer: containerRef.current!,
    });

    return ()=> {
      canvas.dispose()
    }
  }, [init]);
  return (
    <div className="h-full flex flex-col ">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar />
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar/>
          <div className="h-[calc(100%-124px)] flex-1 bg-muted" ref={containerRef}>
            <canvas ref={canvasRef} />
          </div>
          <Footer/>
        </main>
      </div>
    </div>
  );
};

export default Editor;
