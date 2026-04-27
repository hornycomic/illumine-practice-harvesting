export type AppRole='ILLUMINE_ADMIN'|'CLIENT_ADMIN'|'SALES_OFFICER'|'REVIEWER';
export async function getCurrentUser(){return {name:'Demo User',role:'ILLUMINE_ADMIN' as AppRole};}
