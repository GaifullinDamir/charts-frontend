import { TableCell } from "../";
import { ITableRow } from "../../models";

const TableRow = ({indicator, today, tomarrow, week}: ITableRow) => {

    return (
        <div className='table-row'>
            <TableCell
                value={indicator}
                className="table-row__first-item"/>
            <TableCell
                value={`${today}`}
                className="table-row"/>
            <TableCell
                value={`${tomarrow.value}`}
                addition={`${tomarrow.addition}%`}
                className={`table-row table-row_${tomarrow.addition > 0 ? 'success' : tomarrow.addition < 0 ? 'danger' : 'neutral' }`}/>
            <TableCell
                value={`${week}`}
                className="table-row"/>
        </div>
    );
};

export default TableRow;