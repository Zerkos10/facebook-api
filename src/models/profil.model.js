import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const findProfile = ({ id }) => {
    return prisma.profile.findFirst({
        where: {
            userId : id,
        }, 
    });
}

export const updateOne = async ({ id, firstName, lastName}) => {
    return prisma.profile.update({
        where: {
            userId : id,
        },
        data: {
            lastName,
            firstName,
        },
    });
}