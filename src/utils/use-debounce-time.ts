
export function useDebounceTime(wait: number, callback: Function, thisArgs?: any) {
    let timeout: any;
    return (...args: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => callback.apply(thisArgs, args), wait);
    }
}
