import {RoleContextInterface, RoleContext} from "../context/Role";
import {useContext} from 'react';

export function useRole(): RoleContextInterface {
    const roleContext = useContext(RoleContext);
    if (!roleContext){
        throw new Error('Need context at role context');
    }
    return roleContext;
}
