export const uppercase = str => {
    return new Promise((res, rej) => {
            if (!str) {
                rej('Empty string');
            }
            res(str.toUpperCase())
        }
    )
};
