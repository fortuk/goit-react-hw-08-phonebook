import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Switch, Redirect } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';

import s from './App.module.css';
import HomeView from './views/HomeView';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/RegistrationForm';

const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "RegisterView"*/),);
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "LoginView"*/),);
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "ContactsView"*/),);


export default function App() {
    const dispatch = useDispatch();

    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (!isFetchingCurrentUser && (
        <div className={s.App}>
            <h1 className={s.header}>Phonebook</h1>
            <AppBar />
            <Suspense fallback={<Loader type="ThreeDots" color="brown" height={80} width={80} />}>
                <Switch>
                    <PublicRoute exact path="/">
                        <HomeView />
                    </PublicRoute>

                    <PublicRoute path="/register" restricted redirectTo="/contacts">
                        <RegisterView />
                    </PublicRoute>

                    <PublicRoute path="/login" restricted redirectTo="/contacts">
                        <LoginView />
                    </PublicRoute>

                    <PrivateRoute path="/contacts" redirectTo="/login">
                        <ContactsView />
                    </PrivateRoute>

                    <PublicRoute>
                        <Redirect to="/" />
                    </PublicRoute>
                </Switch>
            </Suspense>
        </div>
    ));
}