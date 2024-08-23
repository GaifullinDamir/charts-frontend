import { TableCell } from "../";
import { ITableRow } from "../../models";

const TableRow = ({indicator, today, yesterday, currentDayOfTheWeek}: ITableRow) => {

    return (
        <div className='table-row'>
            <TableCell
                value={indicator}
                className="table-row__first-item"/>
            <TableCell
                value={`${today}`}/>
            <TableCell
                value={`${yesterday.value}`}
                addition={yesterday.addition}
                className={yesterday.addition ? `table-cell_${yesterday.addition > 0 ? 'success' : yesterday.addition < 0 ? 'danger' : 'neutral'}` : ''}/>
            <TableCell
                value={`${currentDayOfTheWeek.value}`}
                addition={currentDayOfTheWeek.addition}
                className={currentDayOfTheWeek.addition ? `table-cell_${currentDayOfTheWeek.addition > 0 ? 'success' : currentDayOfTheWeek.addition < 0 ? 'danger' : 'neutral'}` : ''}/>
        </div>
    );
};

export default TableRow;