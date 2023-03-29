import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await prisma.settings.deleteMany();

  await prisma.settings.createMany({
    data: [
      { name: 'Personal', active: true, description: 'Personal Settings' },
      { name: 'General', active: true, description: 'General Settings' },
      { name: 'System', active: true, description: 'System Settings' },
      { name: 'Root', active: false, description: 'Root Settings' },
    ],
  });

  const settings = await prisma.settings.findMany();

  res.status(200).json({ name: 'hello' });
}
