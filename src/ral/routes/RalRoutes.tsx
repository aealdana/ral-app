import { Navigate, Route, Routes } from 'react-router-dom';
import { RalPage, AdminPage } from '../pages';

export const RalRoutes = () => {
    return (            
        <Routes>
            <Route path='/' element={<RalPage />} /> 
            <Route path='admin' element={<AdminPage />} /> 
            <Route path='/*' element={<Navigate to='/' />} /> 
        </Routes>        
    )
}
