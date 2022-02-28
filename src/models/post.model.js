import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const findAllByUser = ({ id }) => {
    return prisma.post.findMany({
        where: {
            authorId : id,
        },
    });
}

export const findAll = async () => {
    return prisma.post.findMany();
}

export const createOne = async ({ message, authorId }) => {
    return prisma.post.create({
        data: {
            message,
            Author: {
                connect: {
                    id: authorId,
                },
            },
        },
    });
}

export const findOneById = async (id) => {
    return prisma.post.findUnique({
        where: { id },
    });
}

export const deleteOne = async (id) => {
    return prisma.post.delete({
        where: { id },
    });
}

export const updateOne = async ({ id, message}) => {
    return prisma.post.update({
        where: { id },
        data: {
            message,
        },
    });
}