export interface FreeSlot {
    slot_number: number;
    free_rides: number;
    time: string;
}

export interface FreeChunk {
    slots: FreeSlot[];
    time: string;
    free: boolean;
}
