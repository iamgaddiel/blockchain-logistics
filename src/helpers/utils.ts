
export function getRandomString(length: number): string {
    return (Math.random() + 1).toString(36).substring(length);
}

export function isNullish(value: any): boolean{
    if (value === null) return true;
    return false
}

export function objectIsEmpty(value: object): boolean {
    if (typeof value !== "undefined" && !(value instanceof String)) {
        return false
    }
    return true
}

