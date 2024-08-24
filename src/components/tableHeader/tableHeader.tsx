import { TableCellOneSlot } from "../";


const TableHeader = () => {
    return (
        <div className="table-header">
            <TableCellOneSlot
                firstSlot="Показатель"
                className="table-header__cell"/>
            <TableCellOneSlot
                firstSlot="Текущий день"
                className="table-header__cell"/>
            <TableCellOneSlot
                firstSlot="Вчера"
                className="table-header__cell"/>
            <TableCellOneSlot
                firstSlot="Этот день недели"
                className="table-header__cell"/>
        </div>
    );
};

export default TableHeader;