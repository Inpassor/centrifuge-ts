# Browser Javascript client for Centrifugo


## Contribute

If you want to contribute, follow these steps:

- (Only on Windows) Install all the required tools and configurations using
Microsoft's `windows-build-tools`. Run this command from an elevated PowerShell
or CMD.exe as Administrator:
    ~~~
    npm install --global --production windows-build-tools
    ~~~
    Note that it may take a while.
- Install the package `node-gyp` globally:
    ~~~
    npm install --global node-gyp
    ~~~
- Install the project dependencies:
    ~~~
    npm install
    ~~~
- Run `npm run build` command from the root repository folder - this results in
creating unminified (`centrifuge.js`) and minified (`centrifuge.min.js`) bundles
in the `dist` directory.


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
