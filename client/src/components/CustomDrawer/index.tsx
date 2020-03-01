import React from "react";
import {Drawer, List, ListItem, ListItemIcon,ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDrawer} from "../../hooks/useDrawer";
import {HomeRounded as HomeRoundedIcon, TimelineRounded as StatsIcon} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';

type DrawerProps = {
    drawerOpened: boolean
}

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const CustomDrawer: React.FC<DrawerProps> = () => {
    const {openDrawer, setOpenDrawer} = useDrawer();
    const classes = useStyles();
    const history = useHistory();

    function handleHomeClick() {
        setOpenDrawer(false);
        history.push("/Main");
    }
    return(
        <div className={classes.list}>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                        <ListItem button key='Inicio' onClick={handleHomeClick}>
                            <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                    <ListItem button key='Estadísticas'>
                        <ListItemIcon><StatsIcon/></ListItemIcon>
                        <ListItemText primary="Estadísticas" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default CustomDrawer;
