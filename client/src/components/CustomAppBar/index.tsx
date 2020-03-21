import React from "react";
import {AppBar, createStyles, IconButton, Menu, MenuItem, Theme, Toolbar, Tooltip, Typography} from "@material-ui/core";
import {Menu as MenuIcon, MoreVert as MoreVertIcon} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import CustomDrawer from "../CustomDrawer";
import {useTheme} from "../../hooks/useTheme";
import {useDrawer} from "../../hooks/useDrawer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            alignItems: 'flex-start',
        },
        title: {
            flexGrow: 1,
        },
    }),
);
const options = [
    'Perfil',
    'Consola de entrenador',
    'Cerrar Sesión',
];

const ITEM_HEIGHT = 48;
const CustomAppBar: React.FC = () => {
    const { setTheme } = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {openDrawer, setOpenDrawer} = useDrawer();
    const [dark, setDark] = React.useState(true);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const svgLight = "M 2, 12 a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0";
    const svgDark = "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z";
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, option: string | number | undefined) => {
        switch (option) {
            case 'Cerrar Sesión':
                handleLogout();
        }
        setAnchorEl(null);
    };

    function handleLogout() {
        localStorage.clear();
    }
    function handleThemeButton(){

        setDark(!dark);
        if (dark){
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }
    return (
        <div>
            <AppBar position="static" elevation={dark?0:10} style={{
                transition:"all 500ms ease-in-out",
                borderBottom: dark?"1px solid #5f6368":"none"
            }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tablas
                    </Typography>
                    <Tooltip title="Cambiar tema">

                    <IconButton
                        className={classes.menuButton}
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleThemeButton}
                    >
                        <svg style={{"transition": "d 2s ease-in-out", "outline":"none"}} className="MuiSvgIcon-root jss695" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                             role="presentation" tabIndex={-1}>
                            <path d={dark ? svgDark : svgLight}/>
                        </svg>
                    </IconButton>
                    </Tooltip>

                    <IconButton
                        className={classes.menuButton}
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon/>
                    </IconButton>

                </Toolbar>
                <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                        }}
                    >
                        {options.map((option: string | number | undefined) => (
                            <MenuItem key={option}
                                      onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => handleClose(e, option)}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <CustomDrawer drawerOpened={openDrawer}/>
            </AppBar>
        </div>
    );
};

export default CustomAppBar;