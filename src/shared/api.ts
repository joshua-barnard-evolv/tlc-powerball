interface Payload {
    CompanyId: string;
    MaxDrawCountPerProduct: number;
    OptionalProductFilter: string[];
}

export const fetchLottoResults = async (payload: Payload) => {
    try {
        const result = await fetch('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const response = await result.json();

        return response.DrawResults[0];
    } catch (error) {
        console.error('Error fetching lotto results', error);
    }
};

