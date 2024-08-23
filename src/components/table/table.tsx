import { IMoneyTurnover } from "../../models";

type TableProps = {
    tableName?: string;
    data: IMoneyTurnover[]
}

const Table = ({tableName, data}: TableProps) => {


    return (
        <div className="table">
            
        </div>
    );
};

export default Table;