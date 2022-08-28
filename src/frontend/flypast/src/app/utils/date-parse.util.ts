import { BaseHttp, FreeSlotHttp } from '../interfaces/api-models';
import { FreeChunk } from '../interfaces/free-slots.interface';
import { Attraction, BaseDates } from '../interfaces/models';

export { parseAttractions, parseBaseDates };

function parseBaseDates<T extends BaseHttp>(data: T): BaseDates {
    return {
        CreatedAt: new Date(data.CreatedAt),
        UpdatedAt: new Date(data.UpdatedAt),
        DeletedAt: new Date(data.DeletedAt)
    };
}

function parseAttractions(slots: FreeSlotHttp[], attraction: Attraction, numberOfTickets: number): FreeChunk[] {
    let sortedArray = slots.sort((n1, n2) => {
        if (n1.slot_number > n2.slot_number) return 1;
        return -1;
    });

    const chunks: FreeChunk[] = [];
    let currentIndex: number = 0;
    for (let i = 0; i < attraction.end_time_minutes - attraction.start_time_minutes - attraction.slotduration; i += 30) {
        chunks[i / 30] = { slots: [], time: intToDate(i + attraction.start_time_minutes), free: false };
        while (!!sortedArray[currentIndex] && sortedArray[currentIndex].slot_number * attraction.slotduration < i + 30) {
            if (sortedArray[currentIndex].free_rides >= numberOfTickets) {
                const slotTime = intToDate(
                    attraction.start_time_minutes + attraction.slotduration * sortedArray[currentIndex].slot_number - 5
                );
                chunks[i / 30].slots.push({ ...sortedArray[currentIndex], time: slotTime });
                chunks[i / 30].free = true;
            }
            currentIndex += 1;
        }
    }

    return chunks;
}

function intToDate(time: number): string {
    let hours = String(Math.floor(time / 60));
    let min = String(Math.floor(time % 60));

    if (hours.length == 1) hours = `0${hours}`;
    if (min.length == 1) min = `0${min}`;
    return `${hours}:${min}`;
}
