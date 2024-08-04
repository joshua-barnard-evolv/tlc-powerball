interface Payload {
    CompanyId: string;
    MaxDrawCountPerProduct: number;
    OptionalProductFilter: string[];
}
// TODO figure out what to do with payload

export const fetchLottoResults = async () => {
    const payload = {
        CompanyId: 'GoldenCasket',
        MaxDrawCountPerProduct: 1,
        OptionalProductFilter: ['Powerball']
    };

    const response = await fetch('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return await response.json();
};

