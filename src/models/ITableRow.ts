export interface ITableRow {
    indicator: string;
    today: number;
    tomarrow: {
        value: number;
        addition: number;
    };
    week: number;
}