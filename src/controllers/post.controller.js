import * as PostModel from '../models/post.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const CreatePostDto = async ({ body, user }, res) => {
    const { message } = body;
    const post = await PostModel.createOne({
        message,
        authorId: user.id,
    });

    res
      .status(201)
      .json({data: { post }});
}

export const findOne = async ({ params: { id } }, res, next) => {
    const post = await PostModel.findOneById(Number(id));
    if (!post) {
        return next(new HttpException('Post not found', HttpStatus.NOT_FOUND));
    }

    res
      .status(200)
      .json ({ data : { post }});
}

export const findAll = async (res, res) => {
    res
      .status(200)
      .json({
          data: {
              posts: await PostModel.findAll(),
          },
      });
}

export const UpdatePostDto = async ({ params: { id }, body }, res) => {
    const post = await PostModel.updateOne(Number(id), body);

    res
      .status(200)
      .json({ data : { post }});
}

export const deleteOne = async ({ params: { id }}, res) => {
    await PostModel.deleteOne(Number(id));

    res
      .status(204)
      .end();
}