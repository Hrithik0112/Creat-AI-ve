"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, MousePointerClick, Redo2, Undo2 } from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { Hint } from "@/components/hint";
import { BsCloudCheck } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px] ">
      <Logo />
      <div className="h-full w-full flex items-center gap-x-1">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger>
            <Button size="sm" variant="ghost">
              File
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}} //todo : need to add funtionlaity
              className="flex items-center gap-x-2"
            >
              <CiFileOn className="size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">Open a json file</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator className="mx-2" orientation="vertical" />
        <Hint label="Select" sideOffset={10} side="bottom">
          <Button className="" variant="ghost" size="icon" onClick={() => {}}>
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>
        <Hint label="Undo" sideOffset={10} side="bottom">
          <Button className="" variant="ghost" size="icon" onClick={() => {}}>
            <Undo2 className="size-4" />
          </Button>
        </Hint>
        <Hint label="Redo" sideOffset={10} side="bottom">
          <Button className="" variant="ghost" size="icon" onClick={() => {}}>
            <Redo2 className="size-4" />
          </Button>
        </Hint>
        <Separator className="mx-2" orientation="vertical" />
        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <div className="text-muted-foreground text-xs">Saved</div>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost">
                Export
                <Download className="size-4 ml-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem>
                <CiFileOn className="size-8" />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">Save For Later Editing</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CiFileOn className="size-8" />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">best for sharing on web</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CiFileOn className="size-8" />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">Best for printing</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CiFileOn className="size-8" />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">Best for editing in vector software</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
