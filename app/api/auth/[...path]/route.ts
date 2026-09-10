import { auth } from '@/lib/auth/server';

const instance = auth();
export const { GET, POST } = instance.handler();
