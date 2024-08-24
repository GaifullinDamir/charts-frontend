import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAllMoneyTurnoverPaginated } from "../../http/moneyTurnoverApi";
import { Table } from "../table";

const MoneyTurnover = () => {
    const {
        moneyTurnoverArray,
        moneyTurnoverArrayError,
        moneyTurnoverArrayIsLoading
    } = useAppSelector(state => state.moneyTurnoverReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('dispatch');
        dispatch(fetchAllMoneyTurnoverPaginated({page: 1, size: 8}));
    }, []);


    return (
        <div className="money-turnover">
            <div className="money-turnover__wrapper">
                {!moneyTurnoverArrayIsLoading && !moneyTurnoverArrayError && moneyTurnoverArray.length && <Table data={moneyTurnoverArray}/>}
            </div>
        </div>
    );
};

export default MoneyTurnover;