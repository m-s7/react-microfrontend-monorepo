import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

const fetchSettings = async () => {
  const settings = await prisma.settings.findMany();

  return settings;
};

export default function General() {
  fetchSettings().then((res) => {
    console.log(res);
  });

  return (
    <>
      <h1>General</h1>
    </>
  );
}
