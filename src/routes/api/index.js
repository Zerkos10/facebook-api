import { Router } from 'express';
import AuthenticationRoutes from './authentication.route';
import UserRoutes from './user.route';
import PostRoutes from './post.route';
import  jwt from '../../middlewares/jwt.middleware';

const api = Router();

api.use('/authentication', AuthenticationRoutes);
api.use('/users', jwt, UserRoutes);
api.use('/post', jwt, PostRoutes);

export default api;