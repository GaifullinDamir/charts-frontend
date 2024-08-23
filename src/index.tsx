import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchAllMoneyTurnoverPaginated } from "./http/moneyTurnoverApi";

const App = () => {

    const {
        moneyTurnoverArray,
        // moneyTurnoverArrayIsLoading,
        // moneyTurnoverArrayError
    } = useAppSelector(state => state.moneyTurnoverReducer);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchAllMoneyTurnoverPaginated({page: 1, size: 7}));
    }, []);

    return (
        <div>
            <div>Наличные: {moneyTurnoverArray[0].cash}</div>
        </div>
    );
};

export default App;