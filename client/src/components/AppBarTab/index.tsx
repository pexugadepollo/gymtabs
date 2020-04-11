import React from "react";
import {Box} from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
const DashboardAppBarTab:React.FC<TabPanelProps> = ({children, index, value}) =>{

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

export default DashboardAppBarTab;
