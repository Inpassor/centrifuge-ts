export class Observable {

    private __callbacks = {};

    public on(events: string, fn: Function): this {
        events.replace(/[^\s]+/g, (name: string): string => {
            (this.__callbacks[name] = this.__callbacks[name] || []).push(fn);
            return '';
        });
        return this;
    }

    public one(name: string, fn: Function): this {
        fn['one'] = true;
        return this.on(name, fn);
    }

    public off(events: string, fn?: Function): this {
        if (events === '*') {
            this.__callbacks = {};
        } else if (fn) {
            const arr = this.__callbacks[events];
            for (let i = 0, cb; (cb = arr && arr[i]); ++i) {
                if (cb === fn) {
                    arr.splice(i, 1);
                }
            }
        } else {
            events.replace(/[^\s]+/g, (name: string): string => {
                this.__callbacks[name] = [];
                return '';
            });
        }
        return this;
    }

    public trigger(name: string, args: any[]): this {
        const fns = this.__callbacks[name] || [];
        for (let i = 0, fn; (fn = fns[i]); ++i) {
            if (!fn['busy']) {
                fn['busy'] = true;
                fn.apply(this, args);
                if (fn['one']) {
                    fns.splice(i, 1);
                    i--;
                }
                fn['busy'] = false;
            }
        }
        return this;
    }

}
