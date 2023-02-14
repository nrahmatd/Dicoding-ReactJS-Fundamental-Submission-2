import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import RouteMiddleware from '../middleware/RouteMiddleware';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import HomePage from '../components/HomePage';
import ArchivesPage from '../components/ArchivedNotePage';
import AddNotePage from '../components/AddNotePage';
import DetailNotePage from '../components/DetailNotePage';

const Routes = () => useRoutes([
    {
        path: '/',
        element: (
            <RouteMiddleware middleware="authentication">
                <HomePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/login',
        element: (
            <RouteMiddleware middleware="public">
                <LoginPage />
            </RouteMiddleware>
        )
    },
    {
        path: '/register',
        element: (
            <RouteMiddleware middleware="public">
                <RegisterPage />
            </RouteMiddleware>
        )
    },
    {
        path: '/archives',
        element: (
            <RouteMiddleware middleware="authentication">
                <ArchivesPage />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes',
        element: (
            <RouteMiddleware middleware="authentication">
                <Navigate to="/" replace />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes/new',
        element: (
            <RouteMiddleware middleware="authentication">
                <AddNotePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/notes/:id',
        element: (
            <RouteMiddleware middleware="authentication">
                <DetailNotePage />
            </RouteMiddleware>
        )
    },
    {
        path: '/*',
        element: (
            <RouteMiddleware middleware="public">
                <LoginPage />
            </RouteMiddleware>
        )
    }
]);

export default Routes;