
type TableCellProps = {
    className?: string;
    value: string;
    addition?: string;
}

const TableCell = ({className = '', value, addition}: TableCellProps) => {
    return (
        <div className={`table-cell ${className}`}>
            <div className='table-cell__value'>{value}</div>
            {addition ?? <div className="table-cell__addition">{addition}</div>}
        </div>
    );
};

export default TableCell;