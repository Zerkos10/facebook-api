import { Router } from 'express';
import * as PostController from '../../controllers/post.controller';

const api = Router();

api.post('/', PostController.CreatePostDto);
api.get('/:id', PostController.findOne);
api.get('/', PostController.findAll);
api.delete('/:id', PostController.deleteOne);
api.put('/:id', PostController.UpdatePostDto);