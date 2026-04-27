export const roles=['ILLUMINE_ADMIN','CLIENT_ADMIN','SALES_OFFICER','REVIEWER'] as const;export type UserRole=(typeof roles)[number];export type RawAnswer={questionId:string;answerText:string};
