# hospital-erp

## Local setup instructions

- Install `nodejs`
- Open command line and set these environment variables.

```bash
export API_ENDPOINT=http://api.staging.cov2.in/api/  # URL for the backend
export PORT=8081  # Port where the local frontend will be hosted
```

- `cd` to base directory (with package.json), and do `npm install` the first time.
- Run `npm start`
- `localhost:8081` should now be able to run the frontend code.
