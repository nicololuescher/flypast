import { FreeSlotHttp } from './api-models';

export interface FreeChunk {
    slots: FreeSlotHttp[];
    time: string;
    free: boolean;
}
