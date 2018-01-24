export function isUndefined(value: any): boolean {
    return typeof value === 'undefined';
}

export function isFunction(value: any): boolean {
    return typeof value === 'function';
}

export function isString(value: any): boolean {
    return typeof value === 'string';
}

export function log(level: string, ...args: any[]) {
    if (console) {
        if (args.length === 1) {
            args = args[0];
        }
        const logger = console[level];
        if (isFunction(logger)) {
            logger.apply(logger, args);
        }
    }
}

export function stripSlash(value: string): string {
    return value.replace(/\/$/, '');
}

export function startsWith(value: string, prefix: string): boolean {
    return value.lastIndexOf(prefix, 0) === 0;
}

export function endsWith(value: string, suffix: string): boolean {
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

export function errorExists(data: any): boolean {
    return 'error' in data && data.error !== null && data.error !== '';
}

export function objectToQuery(object: any): string {
    let p = [];
    for (let i in object) {
        if (object.hasOwnProperty(i)) {
            p.push(encodeURIComponent(i) + (object[i] ? '=' + encodeURIComponent(object[i]) : ''));
        }
    }
    return p.join('&');
}
