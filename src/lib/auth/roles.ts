import type { AppRole } from './session';
export function defaultPathForRole(role:AppRole){if(role==='SALES_OFFICER')return '/harvesting';if(role==='REVIEWER')return '/review';return '/dashboard';}
