import { parseDate, getMonthCalendar } from ".";

describe('./index.js', () => {
    describe(
        'When parseDate is called', () => {
            it('should return json with values', () => {

                const values = parseDate(new Date(1990, 2, 5));

                expect(values).toStrictEqual({ year: 1990, month: 2, days: 28 })

            });
        });
    describe("When getMonthCalendar is called", () => {
        it('should return calendar information', () => {

            const params = { year: 1990, month: 2, days: 28 };
            const values = getMonthCalendar(params);

            expect(values).toStrictEqual({
                monthName: 'March',
                days: 28,
            })

        });
    });
});
