import { BaseHttp } from '../interfaces/api-models';
import { Attraction, BaseDates } from '../interfaces/models';

export { parseAttractions, parseBaseDates };

function parseBaseDates<T extends BaseHttp>(data: T): BaseDates {
    return {
        CreatedAt: new Date(data.CreatedAt),
        UpdatedAt: new Date(data.UpdatedAt),
        DeletedAt: new Date(data.DeletedAt)
    };
}

function parseAttractions(attraction: Attraction, numberOfTickets: number): any {
    let array = [
        {
            slot_number: 0,
            free_rides: 4
        },
        {
            slot_number: 1,
            free_rides: 4
        },
        {
            slot_number: 2,
            free_rides: 4
        },
        {
            slot_number: 3,
            free_rides: 4
        },
        {
            slot_number: 4,
            free_rides: 4
        },
        {
            slot_number: 5,
            free_rides: 4
        },
        {
            slot_number: 6,
            free_rides: 4
        },
        {
            slot_number: 7,
            free_rides: 4
        },
        {
            slot_number: 8,
            free_rides: 4
        },
        {
            slot_number: 9,
            free_rides: 4
        },
        {
            slot_number: 10,
            free_rides: 4
        },
        {
            slot_number: 11,
            free_rides: 4
        },
        {
            slot_number: 12,
            free_rides: 4
        },
        {
            slot_number: 13,
            free_rides: 4
        },
        {
            slot_number: 14,
            free_rides: 4
        },
        {
            slot_number: 15,
            free_rides: 4
        },
        {
            slot_number: 16,
            free_rides: 4
        },
        {
            slot_number: 17,
            free_rides: 4
        },
        {
            slot_number: 18,
            free_rides: 4
        },
        {
            slot_number: 19,
            free_rides: 4
        },
        {
            slot_number: 20,
            free_rides: 4
        },
        {
            slot_number: 21,
            free_rides: 4
        },
        {
            slot_number: 22,
            free_rides: 4
        },
        {
            slot_number: 23,
            free_rides: 4
        },
        {
            slot_number: 24,
            free_rides: 4
        },
        {
            slot_number: 25,
            free_rides: 4
        },
        {
            slot_number: 26,
            free_rides: 4
        },
        {
            slot_number: 27,
            free_rides: 4
        },
        {
            slot_number: 28,
            free_rides: 4
        },
        {
            slot_number: 29,
            free_rides: 4
        },
        {
            slot_number: 30,
            free_rides: 4
        },
        {
            slot_number: 31,
            free_rides: 4
        },
        {
            slot_number: 32,
            free_rides: 4
        },
        {
            slot_number: 33,
            free_rides: 4
        },
        {
            slot_number: 34,
            free_rides: 4
        },
        {
            slot_number: 35,
            free_rides: 4
        },
        {
            slot_number: 36,
            free_rides: 4
        },
        {
            slot_number: 37,
            free_rides: 4
        },
        {
            slot_number: 38,
            free_rides: 4
        },
        {
            slot_number: 39,
            free_rides: 4
        },
        {
            slot_number: 40,
            free_rides: 4
        },
        {
            slot_number: 41,
            free_rides: 4
        },
        {
            slot_number: 42,
            free_rides: 4
        },
        {
            slot_number: 43,
            free_rides: 4
        },
        {
            slot_number: 44,
            free_rides: 4
        },
        {
            slot_number: 45,
            free_rides: 4
        },
        {
            slot_number: 46,
            free_rides: 4
        },
        {
            slot_number: 47,
            free_rides: 4
        },
        {
            slot_number: 48,
            free_rides: 4
        },
        {
            slot_number: 49,
            free_rides: 4
        },
        {
            slot_number: 50,
            free_rides: 4
        },
        {
            slot_number: 51,
            free_rides: 4
        },
        {
            slot_number: 52,
            free_rides: 4
        },
        {
            slot_number: 53,
            free_rides: 4
        },
        {
            slot_number: 54,
            free_rides: 4
        },
        {
            slot_number: 55,
            free_rides: 4
        },
        {
            slot_number: 56,
            free_rides: 4
        },
        {
            slot_number: 57,
            free_rides: 4
        },
        {
            slot_number: 58,
            free_rides: 4
        },
        {
            slot_number: 59,
            free_rides: 4
        }
    ];

    let sortedArray = array.sort((n1, n2) => {
        if (n1.slot_number > n2.slot_number) return 1;
        return -1;
    });

    let start = attraction.start_time_minutes;

    sortedArray = sortedArray.map((obj) => {
        let time = intToDate(start);
        start += attraction.slotduration;

        return {
            slot_number: obj.slot_number,
            free_rides: obj.free_rides,
            time: time,
            free: obj.free_rides < numberOfTickets ? false : true
        };
    });

    return sortedArray;
}

function intToDate(time: number): string {
    let hours = new String(time / 60);
    let min = new String(time % 60);

    if (hours.length == 1) hours = `0${hours}`;
    if (min.length == 1) min = `0${min}`;
    return `${hours}:${min}`;
}
