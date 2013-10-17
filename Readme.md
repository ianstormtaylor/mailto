# mailto

  Programmatically open the user's email client.

## Installation

    $ component install ianstormtaylor/mailto

## Example

```js
var mailto = require('mailto');

mailto('ian@ianstormtaylor.com', {
  subject: 'The mailto component...',
  body: 'It works!'
});
```

## API

### mailto(email, options)
  
  Draft a new message to an `email` address with `options`:

    {
      subject: String,
      body: String
    }

## License

  MIT
