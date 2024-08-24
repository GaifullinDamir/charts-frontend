import { TableCellOneSlot, TableCellTwoSlot } from "../";
import { ITableRow } from "../../models";

const TableRow = ({
    indicator,
    today,
    yesterday,
    currentDayOfTheWeek
    }: ITableRow) => {

    const getColorByPercentage= (percentage: number) => percentage > 0 ? 'success' : percentage < 0 ? 'danger' : 'neutral'; 

    return (
        <div className='table-row'>
            <TableCellOneSlot
                firstSlot={indicator}
                className="table-row__first-cell"/>
            <TableCellOneSlot
                firstSlot={`${today}`}
                className="table-row__second-cell"/>
            <TableCellTwoSlot
                firstSlot={`${yesterday.value}`}
                secondSlot={`${yesterday.addition}%`}
                className= {`table-row__third-cell table-row-cell_${getColorByPercentage(yesterday.addition)}`}/>
            <TableCellOneSlot
                firstSlot={`${currentDayOfTheWeek.value}`}
                className={`table-row__fourth-cell table-row-cell_${getColorByPercentage(currentDayOfTheWeek.addition)}`}/>
        </div>
    );
};

export default TableRow;