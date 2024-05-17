
import connectDb from '../../db/connection.js';
import authRouter from './auth/auth.router.js'
import { globalErrorHandler } from '../utilities/errorHandling.js';
const initApp=(app,express)=>{
    app.use(express.json());
    connectDb();
    
    app.use('/auth',authRouter)
    

    app.use(globalErrorHandler)
}   
export default initApp;