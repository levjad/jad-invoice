export const generateId = (): string => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    // Generate two random letters
    const randomLetters = Array.from({ length: 2 }, () =>
        letters.charAt(Math.floor(Math.random() * letters.length))
    ).join('');

    // Generate four random numbers
    const randomNumbers = Array.from({ length: 4 }, () =>
        numbers.charAt(Math.floor(Math.random() * numbers.length))
    ).join('');

    return `${randomLetters}${randomNumbers}`;
};