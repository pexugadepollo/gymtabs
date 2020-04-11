import {DashboardContextInterface, DashboardContext} from "../context/Dashboard";
import {useContext} from 'react';

export function useDashboard(): DashboardContextInterface {
    const dashboardContext = useContext(DashboardContext);
    if (!dashboardContext){
        throw new Error('Need context at dashboard context');
    }
    return dashboardContext;
}
