import { TableCell } from "../";
import { ITableRow } from "../../models";

const TableRow = ({indicator, today, yesterday, currentDayOfTheWeek}: ITableRow) => {

    return (
        <div className='table-row'>
            <TableCell
                value={indicator}
                className="table-cell__first-column"/>
            <TableCell
                value={`${today}`}
                className="table-cell__second-column"/>
            <TableCell
                value={`${yesterday.value}`}
                addition={yesterday.addition || yesterday.addition === 0 ? `${yesterday.addition}%` : undefined}
                className={`table-cell__third-column ${yesterday.addition ? `table-cell_${yesterday.addition > 0 ? 'success' : yesterday.addition < 0 ? 'danger' : 'neutral'}` : ''}`}/>
            <TableCell
                value={`${currentDayOfTheWeek.value}`}
                className={`table-cell__fourth-column ${currentDayOfTheWeek.addition ? `table-cell_${currentDayOfTheWeek.addition > 0 ? 'success' : currentDayOfTheWeek.addition < 0 ? 'danger' : 'neutral'}` : ''}`}/>
        </div>
    );
};

export default TableRow;