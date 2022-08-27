import {BaseDates} from "../interfaces/models";
import {BaseHttp} from "../interfaces/api-models";

export function parseBaseDates<T extends BaseHttp>(data: T): BaseDates {
    return {
        CreatedAt: new Date(data.CreatedAt),
        UpdatedAt: new Date(data.UpdatedAt),
        DeletedAt: new Date(data.DeletedAt)
    }
}
