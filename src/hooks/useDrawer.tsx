import {DrawerContextInterface, DrawerContext} from "../context/Drawer";
import {useContext} from 'react';

export function useDrawer(): DrawerContextInterface {
    const drawerContext = useContext(DrawerContext);
    if (!drawerContext){
        throw new Error('Need context at drawer context');
    }
    return drawerContext;
}