import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expensesAction'
import {setTextFilter} from './actions/filtersAction'
import getVisibleExpenses from './selectors/expensesSelector'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 3000}));
store.dispatch(addExpense({description: 'Eletricity bill'}));
store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
