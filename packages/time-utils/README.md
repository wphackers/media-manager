# Time utils

Library with useful functions to deal with time issues.

## Installation

Install the module

```bash
npm install @media-manager/time-utils --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as IE browsers then using [core-js](https://github.com/zloirock/core-js) will add polyfills for these methods._

## API

### Regular Expressions

#### timecodeRegExp

### Helpers

#### convertSecondsToTimeCode()

```js
import { convertSecondsToTimeCode } from '@media-manager/time-utils';

console.log( `200 seconds in time format: ${ convertSecondsToTimeCode( 200 ) }` );
```

#### convertTimeCodeToSeconds()

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
