import { fetchLottoResults } from './api';

describe('fetchLottoResults', () => {
    it('should return the latest lotto results', async () => {
        const mockResponse = {
            primaryNumbers: [1, 2, 3, 4, 5, 6, 7],
            secondaryNumbers: [8]
        };

        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({ DrawResults: [mockResponse] })
        } as any);

        const payload = {
            CompanyId: 'GoldenCasket',
            MaxDrawCountPerProduct: 1,
            OptionalProductFilter: ['Powerball']
        };

        const response = await fetchLottoResults(payload);

        expect(response).toBeDefined();
        expect(response).toEqual(mockResponse);
    });
});