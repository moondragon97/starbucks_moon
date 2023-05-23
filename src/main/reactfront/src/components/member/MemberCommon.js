export const minIdLen = 5;
export const maxIdLen = 20;
export const minPwLen = 8;
export const maxPwLen = 20;

export const idRegExp = new RegExp(`^[a-z0-9_-]{${minIdLen},${maxIdLen}}$`);
export const pwRegExp = new RegExp(`^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{${minPwLen},${maxPwLen}}$`);
export const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;