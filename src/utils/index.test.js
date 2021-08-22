import { parseDate, getMonthCalendar } from ".";

describe('./index.js', () => {
    describe(
        'When parseDate is called', () => {
            it('should return json with values', () => {

                const values = parseDate(new Date(1990, 2, 5));

                expect(values).toStrictEqual({ year: 1990, month: 2, days: 28 })

            });
        })
});
