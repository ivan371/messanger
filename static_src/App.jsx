import React from 'react';
import {Route, Switch} from "react-router-dom";
import ChatList from "./components/ChatList";
import Layout from "./components/Layout";

export const appStyle = {
    content: {
        margin: '0 auto',
        width: '1024px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '100%',
        backgroundColor: 'white',
    }
};

class AppComponent extends React.Component {
    render() {
        return (
            <div style={appStyle.content}>
                <Layout/>
                <Switch>
                    <Route exact path="/" component={ChatList}/>
                    <Route exact path="/:id" component={ChatList}/>
                </Switch>
            </div>
        );
    }
}

export default AppComponent;