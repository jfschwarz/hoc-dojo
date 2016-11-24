export const isEmail = (string) => /(.+)@(.+){2,}\.(.+){2,}/.test(string)

export const isPhone = (string) => /^[0-9()-\+]+$/.test(string)
