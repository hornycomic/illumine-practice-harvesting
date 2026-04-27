import type { UserRole } from '@/types/domain';
declare module 'next-auth'{interface Session{user:{id:string;name?:string|null;email?:string|null;role:UserRole;clientId:string|null}}}
