import React from "react";

interface InnerCellProps {
    row: any;
    column: any;
}

export const InnerCell: React.FC<InnerCellProps> = ({ row, column }) => {
    return (
        <div className="w-full">
            {row[column]}
        </div>
    );
};