export const isInDraw = (number: number, drawNumbers: number[]) => {
    return drawNumbers.includes(number);
};

export const generateArray = (size: number) => {
    return Array.from({ length: size }, (_, i) => i + 1);
};