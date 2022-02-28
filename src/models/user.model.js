import {PrismaClient} from '@babel/client';
const prisma = new PrismaClient();

export const findByCredentials = ({email, password}) => {
    return prisma.user.findFirst({
        where: {
            email,
            password,
        },
    });
}

export const createOne = ({ email, password }) => {
    return prisma.user.create({
        data: {
            email,
            password,
            Profile: {
                create: {
                    firstName: '',
                    lastName:'',
                },
            },
        },
    });
}

export const findById = ({ id }) => {
  return prisma.user.findUnique({
      where: { id },
  });
}

export const deleteOne = ({ id }) => {
    return prisma.user.deleteOne({
        where: { id },
    });
}