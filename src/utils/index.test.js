import { parseDate, getMonthCalendar } from ".";
import * as march from '../fixtures/march.json'

describe('./index.js', () => {
    describe(
        'When parseDate is called', () => {
            it('should return json with values', () => {

                const values = parseDate(new Date(1990, 2, 1));

                expect(values).toMatchObject({ year: 1990, month: 2, day: 1, days: 28 })

            });
        });
    describe("When getMonthCalendar is called", () => {
        it('should return calendar information', () => {

            const params = { year: 1990, month: 2, day: 1, days: 28 };
            const values = getMonthCalendar(params);

            expect(march).toMatchObject(values);
        });
    });
});
