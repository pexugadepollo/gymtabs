import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import AppBarTab from "../AppBarTab";

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));
class tab {
    label:string;
    icon:React.ReactElement;
    body:React.ReactElement;

    constructor(label:string, icon:React.ReactElement, body:React.ReactElement) {
        this.label = label;
        this.icon = icon;
        this.body = body;
    }
}
interface DashboardAppProps {
    tabs: tab[]
}

const DashboardAppBar:React.FC<DashboardAppProps> = ({ tabs}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const createTabsHeaders = () => {
        let generatedTabs:React.ReactElement[] = [];
        let i = 0;
        tabs.forEach(value => {
            generatedTabs.push(
                <Tab label={value.label} icon={value.icon} {...a11yProps(i)} />
            )
            i++;
        });

        return generatedTabs;
    }
    const createTabsBody = () => {
        let generatedTabs:React.ReactElement[] = [];
        let i = 0;
        tabs.forEach(value1 => {
            generatedTabs.push(
                <AppBarTab value={value} index={i}>
                    {value1.body}
                </AppBarTab>
            );
            i++;
        });
        return generatedTabs;
    };

    return(
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {createTabsHeaders()}
                </Tabs>
            </AppBar>
            {createTabsBody()}
        </div>
    )
}

export default DashboardAppBar;
