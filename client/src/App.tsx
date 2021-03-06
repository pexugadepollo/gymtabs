import React from 'react';
import './App.css';
import Login from './pages/Login';
import Training from "./pages/Training";
import HomeCoach from "./pages/CoachDashboard"
import {Redirect, Route, Switch} from 'react-router-dom';
import Main from "./pages/Main";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import {useTheme} from "./hooks/useTheme";
import {DashboardProvider} from "./context/Dashboard";

const themeDark = createMuiTheme({
    palette: {
        type: "dark",

    }
});
const themeLight = createMuiTheme({
    palette: {
        type: "light",
    }
});


const App: React.FC = () => {
    const {theme} = useTheme();
    return (
            <MuiThemeProvider theme={theme==='dark'?themeDark:theme==='light'?themeLight:themeDark}>
                <Switch>
                    <Route exact path="/Login">
                        <Login/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/Login"/>
                    </Route>
                    <Route exact path="/Main">
                        <Main/>
                    </Route>
                    <Route exact path="/Train">
                        <Training/>
                    </Route>
                    <Route exact path="/CoachDashboard">
                        <DashboardProvider>
                            <HomeCoach/>
                        </DashboardProvider>
                    </Route>
                </Switch>
            </MuiThemeProvider>
    );
};

export default App;
