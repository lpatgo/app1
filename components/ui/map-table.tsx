import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

const mapCellVariants = cva(
  "py-2 px-3 text-s align-middle", // Base styles
  {
    variants: {
      variant: {
        default: "p-0 m-0 bg-lime-200 ",
        grey: "bg-gray-200",
        mapog: "bg-slate-200",
        label: "font-bold", // Adjust based on how you want numbered cells to look
        allcaps: "uppercase"
        // Add other variants as needed
      },

    },
    defaultVariants: {
      variant: "grey", // Default variant if none is specified
    },
  }
);

const Map = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm border-collapse overflow-hidden shadow-custom min-w-360 ", className)}
      {...props}
    />
  </div>
))
Map.displayName = "Map"

const MapHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
MapHeader.displayName = "MapHeader"


const MapBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0 ", className)}
    {...props}
  />
))
MapBody.displayName = "MapBody"


const MapFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t  font-medium [&>tr]:last:border-b-0 overflow-scroll",
      className
    )}
    {...props}
  />
))
MapFooter.displayName = "MapFooter"


const MapRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors bg-opacity-75 hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
MapRow.displayName = "MapRow"


const MapHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "top-0 z-3 px-1 text-s align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 sticky",
      className
    )}
    {...props}
  />
))
MapHead.displayName = "MapHead"


const MapCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & VariantProps<typeof mapCellVariants>
>(({ className, variant, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(mapCellVariants({ variant:"grey" }), className="uppercase")}
    {...props}
  />
));
MapCell.displayName = "MapCell";



const MapCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
MapCaption.displayName = "MapCaption"

export {
    Map,
  MapHeader,
  MapBody,
  MapFooter,
  MapHead,
  MapRow,
  MapCell,
  MapCaption,
}
