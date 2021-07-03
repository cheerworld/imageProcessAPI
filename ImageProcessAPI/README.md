# Image Process API Server

To install and start the Image Process API server, run the following commands in this directory:

- `npm install`
- `npm run start`
- you can test the ImageProcessAPI server with `npm run test`
- you can prettier server code with `npm run prettier` and eslint code with `npm run lint`

## Using The Server

### Include A Header

All requests should include a header and mode to work with your own data:

```js
const SERVER = 'http://localhost:8000';

function defaultFetchOpts() {
  return {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': SERVER,
    },
  };
}

fetch(url, {
  method: 'GET',
  ...defaultFetchOpts(),
});
```

### API Endpoint

The following endpoints are available:

| Endpoints                                                           | Usage                  | Params                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /api/images?fliename={filename}&width={width}&height={height}` | Get a processed image. | **filename** - [string] You can choose from appleTree, field, flower, garden, lilies, lotus, pond, seaside for filename. **width** - [number]. **height** - [number]. For width and height, you need to enter numbers that are above 0. |
