# hospital-erp

## Local setup instructions

- Install `nodejs`
- Open command line and set these environment variables.

```bash
export API_ENDPOINT=https://cov2.in/hospitalerp/api/  # URL for the backend
export PORT=8001  # Port where the local frontend will be hosted
```

- `cd` to base directory (with package.json), and do `npm install` the first time.
- Run `npm start`
- `localhost:8001` should now be able to run the frontend code.

## Quick and dirty setup without nodejs

- Edit a new file `web/js/globalconf.js` to point it to the desired backend URL (it points to PROD by default).
- Host directory `web` as the root directory using static file hosting. You can use `python3 -m http.server` to achieve that.

## Quick commands

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
