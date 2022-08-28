import {BaseHttp, FreeSlotHttp} from '../interfaces/api-models';
import {Attraction, BaseDates} from '../interfaces/models';
import {FreeSlot} from "../interfaces/free-slots.interface";

export { parseAttractions, parseBaseDates };

function parseBaseDates<T extends BaseHttp>(data: T): BaseDates {
    return {
        CreatedAt: new Date(data.CreatedAt),
        UpdatedAt: new Date(data.UpdatedAt),
        DeletedAt: new Date(data.DeletedAt)
    };
}

function parseAttractions(slots: FreeSlotHttp[], attraction: Attraction, numberOfTickets: number): FreeSlot[] {
    const sortedArray = slots.sort((n1, n2) => {
        if (n1.slot_number > n2.slot_number) return 1;
        return -1;
    });

    let start = attraction.start_time_minutes;

    return sortedArray.map((obj) => {
        let time = intToDate(start);
        start += attraction.slotduration;

        return {
            slot_number: obj.slot_number,
            free_slots: obj.free_rides,
            time: time,
            free: obj.free_rides >= numberOfTickets
        };
    });
}

function intToDate(time: number): string {
    let hours = String(time / 60);
    let min = String(time % 60);

    if (hours.length == 1) hours = `0${hours}`;
    if (min.length == 1) min = `0${min}`;
    return `${hours}:${min}`;
}
