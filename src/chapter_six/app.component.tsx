/**
 * Created by Gene on 16/3/17.
 */

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import { compose, combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger = require("redux-logger");

import reducer from './reducers';
import LogonComponent from './component/logon.component';
import ManagerComponent from './component/manager.component';
import TableComponent from './component/user.table.component';
import UserFormComponent from './component/user.form.component';

const logger = createLogger();

const store = createStore(combineReducers({reducer,routing: routerReducer}), compose(
    applyMiddleware(thunk, logger, routerMiddleware(hashHistory)),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
));
const history = syncHistoryWithStore(hashHistory, store);

class AppComponent extends React.Component <any, any> {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={LogonComponent} />
                    <Route path="/manager" component={ManagerComponent} />
                    <Route path="/newUser" component={UserFormComponent} />
                    <Route path="/modifyUser/:username/:age/:seq" component={UserFormComponent} />
                </Router>
            </Provider>
        )
    }
}

export default AppComponent;