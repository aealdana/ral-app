import { Routes, Route} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { RalRoutes } from '../ral/routes/RalRoutes';


export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes/>} />
            <Route path='/*' element={<RalRoutes/>} />
        </Routes>
    );
}