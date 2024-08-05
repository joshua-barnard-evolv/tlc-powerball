interface Strings {
    powerBallInitials: string;
    message: string;
}

export const strings: Strings = {
    powerBallInitials: 'PB',
    message: 'Select Your Powerball',
};

interface PowerballNumbers {
    primary: number;
    secondary: number;
}

export const powerballNumbers: PowerballNumbers = {
    primary: 35,
    secondary: 20,
};

interface Colors {
    purple: string;
    grey: string;
    white: string;
    blue: string;
    black: string;
}

export const colors: Colors = {
    purple: '#6C4398',
    grey: '#879BAB',
    white: '#fff',
    blue: '#3450A6',
    black: '#000',
};
