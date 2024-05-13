import React from "react";
import { Map, MapHeader, MapBody, MapFooter, MapRow, MapHead, MapCell } from '@/components/ui/map-table'
import {columns, mapData} from '@/components/MapViewer/definitions'
import { InnerCell } from "./InnerCell";
interface MapViewerProps<TData, TValue> {


}

export const MapViewer: React.FC<MapViewerProps<any, any>> = ({ }) => {

    
        
    return (
        <div>
            <Map>
                <MapHeader>
                  
                        <MapRow>
                            {columns.map((column) => {
                                return (
                                    <MapHead key={column}>
                                        {column}
                                    </MapHead>
                                )
                            })}
                        </MapRow>
                  
                </MapHeader>
                <MapBody>
                    {mapData.map((row) => {
                        return (
                            <MapRow key={row.label}>
                                <MapCell variant={'label'}>{row.label}</MapCell>
                                {columns.slice(1).map((column) => {
                                    return (
                                        <MapCell key={column} variant={'mapog'} >
                                            <InnerCell row={row} column={column} />
                                        </MapCell>
                                    )
                                })}
                            </MapRow>
                        )
                    })}
                </MapBody>

            </Map>
        </div>
    );
};