import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* 
            // /login
            // / ->Calendar
        */}
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/" element={<CalendarScreen />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter