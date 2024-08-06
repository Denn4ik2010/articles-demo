import {Article} from '../types/types'

export function getUniqueId(db: Article[]): number {
    return Math.max(...db.map((a) => a.id)) + 1;
}
