# internet-explorer-version
A dumb little script that returns the installed version of Internet Explorer.

```js
const { getIEVersion } = require('internet-explorer-version')

getIEVersion()
  .then((version) => console.log(version))
```

## License
MIT, please see `LICENSE.md` for details
