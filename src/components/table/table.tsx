import { IMoneyTurnover, ITableRow } from "../../models";
import { TableRow } from "../tableRow";

type TableProps = {
    tableName?: string;
    data: IMoneyTurnover[];
}

const Table = ({data}: TableProps) => {
    
    /**
     * Функция, которая конвертирует массив данных в данные для создания таблицы.
     * @param data {IMoneyTurnover[]} -  массив данных
     * @returns {ITableRow[]}
     */
    const createRowsDataArray = (data: IMoneyTurnover[]): ITableRow[] => {
        // Названия строк таблицы
        const indicators = {
            revenue: 'Выручка, руб.',
            cash:  'Наличные',
            nonCash: 'Безналичный расчет',
            creditCards: 'Кредитные карты',
            averageCheck: 'Средний чек, руб.',
            averageGuest: 'Средний гость, руб.',
            deletionAfterPayment: 'Удаление из чека (после оплаты), руб.',
            deletionBeforePayment: 'Удаление из чека (до оплаты), руб.',
            numberOfChecks: 'Количество чеков',
            numberOfGuests: 'Количество гостей',
        };

        const rowsData: ITableRow[] = [
            {
                indicator: 'Показатель',
                today: 'Текущий день',
                yesterday: {value: 'Вчера'},
                currentDayOfTheWeek: {value: 'Этот день недели'}
            }
        ];

        for (const key in indicators) {
            if (key !== 'id' && key !== 'date') {
                
                const indicator = indicators[key as keyof typeof indicators];
                const today = data[0][key as keyof typeof indicators];
                const yesterday = {
                    value: data[1][key as keyof typeof indicators],
                    addition: Math.trunc((today - data[1][key as keyof typeof indicators]) / today * 100)
                };
                const currentDayOfTheWeek = {
                    value: data[7][key as keyof typeof indicators],
                    addition: Math.trunc((today - data[7][key as keyof typeof indicators]) / today * 100)
                };
                rowsData.push(
                    {indicator, today, yesterday, currentDayOfTheWeek}
                );
            }
        }
        return rowsData;
    };

    /**
     * Функция, которая создает массив элементов строк таблицы на основе массива данных для строк таблицы.
     * @param rowsData {ITableRow[]} -  массив данных для строк таблицы
     * @returns {JSX.Element[]}
     */
    const createRowsElements = (rowsData: ITableRow[]): JSX.Element[] => {
        const rows = rowsData.map(rowData => {
            return <TableRow
                key={rowData.indicator}
                indicator={rowData.indicator}
                today={rowData.today}
                yesterday={rowData.yesterday}
                currentDayOfTheWeek={rowData.currentDayOfTheWeek}/>
        })
        return rows
    };

    let tableRows: JSX.Element[] = [];
    const tableRowsData = createRowsDataArray(data);
    tableRows = createRowsElements(tableRowsData);

    return (
        <div className="table">
            <div className="table__container">
            {tableRows}
            </div>
        </div>
    );
};

export default Table;