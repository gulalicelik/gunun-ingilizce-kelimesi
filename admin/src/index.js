import React, {useContext} from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "theme/theme";
import {ThemeEditorProvider} from "@hypertheme-editor/chakra-ui";
import {StoreProvider} from './store/Store';

import {checkAuth} from "./store/Actions";
import {Store} from "./store/Store";

ReactDOM.render(
    <StoreProvider>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <ThemeEditorProvider>
                    <HashRouter>
                        <Switch>
                            <Route path={`/auth`} component={AuthLayout}/>
                            <Route path={`/admin`} component={AdminLayout}/>
                            <Redirect from='/' to='/admin'/>
                        </Switch>
                    </HashRouter>
                </ThemeEditorProvider>
            </React.StrictMode>
        </ChakraProvider>
    </StoreProvider>,
    document.getElementById("root")
);
