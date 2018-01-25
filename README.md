# Browser Javascript client for Centrifugo

See client [documentation](https://fzambia.gitbooks.io/centrifugal/content/clients/javascript.html)


## Install

You can clone the repository or use NPM package `centrifuge-ts`.


## Development

It is convenient to make changes to the `centrifuge-ts` code by running the command
`npm run watch`.


## Contribute

If you want to contribute, install dependencies and run `npm run build` command from
the root repo folder - this results in creating unminified (`centrifuge.js`) and
minified (`centrifuge.min.js`) bundles in `dist` directory.


## Example

~~~
import {
    Centrifuge,
    Subscription,
} from 'centrifuge-ts';

const centrifuge = new Centrifuge({
    // centrifuge options
});
~~~
