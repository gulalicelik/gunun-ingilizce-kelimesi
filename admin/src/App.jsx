import React, {useContext, useState} from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "theme/theme";
import {ThemeEditorProvider} from "@hypertheme-editor/chakra-ui";
import {MainContext} from "./contexts/MainContext";
import PrivateRoute from "./ProtectedRoute";



function App() {
    const [isLogged, setIsLogged] = useState(false);




    const data = {
        isLogged,
        setIsLogged
    }


    return (
        <MainContext.Provider value={data}>
            <ChakraProvider theme={theme}>
                <React.StrictMode>
                    <ThemeEditorProvider>
                        <HashRouter>
                            <Switch>
                                <Route path={`/auth`} component={AuthLayout}/>
                                <PrivateRoute path={`/admin`} component={AdminLayout}/>
                                <Redirect from='/'  to='/admin'/>
                            </Switch>
                        </HashRouter>
                    </ThemeEditorProvider>
                </React.StrictMode>
            </ChakraProvider>
        </MainContext.Provider>);
}

export default App;



