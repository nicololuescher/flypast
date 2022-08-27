import { BaseHttp } from './base.model';

export interface AttractionHttp extends BaseHttp {
    name: string;
    description: string;
    image_url: string;
    coordinates: string;
    slotduration: number;
    start_time_minutes: number;
    end_time_minutes: number;
    max_rides_per_slot: number;
}
