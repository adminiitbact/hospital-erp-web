# hospital-erp

## Local setup instructions

- Install `nodejs`
- Open command line and set these environment variables.

```bash
export API_ENDPOINT=http://staging.cov2.in/hospitalerp/api/  # URL for the backend
export PORT=8081  # Port where the local frontend will be hosted
```

- `cd` to base directory (with package.json), and do `npm install` the first time.
- Run `npm run serve`
- `localhost:8081` should now be able to run the frontend code.

## Quick and dirty setup without nodejs

- Edit a new file `web/js/globalconf.js` to point it to the desired backend URL (it points to PROD by default).
- Host directory `web` as the root directory using static file hosting. You can use `python3 -m http.server` to achieve that.

## Swagger
You can find the backend APIs on Swagger http://staging.cov2.in/hospitalerp/swagger-ui.html
