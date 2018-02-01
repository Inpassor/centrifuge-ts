# Browser Javascript client for Centrifugo


## Contribute

If you want to contribute, install the project dependencies (run `npm i`)
and run `npm run build` - this results in creating unminified (`centrifuge.js`)
and minified (`centrifuge.min.js`) bundles in the `dist` directory.


## Development

It is convenient to make changes to the project code by running the command
`npm run watch`.


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
