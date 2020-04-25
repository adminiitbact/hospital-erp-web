# hospital-erp

## Local setup instructions

- Install `nodejs`
- Open command line and set these environment variables.

```bash
export API_ENDPOINT=http://api.staging.cov2.in/api/  # URL for the backend
export PORT=8081  # Port where the local frontend will be hosted
export firebase=eyJzdG9yYWdlQnVja2V0IjoiaG9zcGl0YWwtZXJwLXN0YWcuYXBwc3BvdC5jb20iLCJhcGlLZXkiOiJBSXphU3lBZjRqN2s1VE1UTjg2UW9pTnRvblBjNnpXb2R3R0Q1TU0iLCJtZXNzYWdpbmdTZW5kZXJJZCI6Ijg0MjkwNzg5NTcwNCIsImFwcElkIjoiMTo4NDI5MDc4OTU3MDQ6d2ViOjg0NDViNTIxYmY0ODE5ZDY4ZjhkZWQiLCJwcm9qZWN0SWQiOiJob3NwaXRhbC1lcnAtc3RhZyIsIm1lYXN1cmVtZW50SWQiOiJHLUNHSERCWEIxWTAiLCJkYXRhYmFzZVVSTCI6Imh0dHBzOi8vaG9zcGl0YWwtZXJwLXN0YWcuZmlyZWJhc2Vpby5jb20iLCJhdXRoRG9tYWluIjoiaG9zcGl0YWwtZXJwLXN0YWcuZmlyZWJhc2VhcHAuY29tIn0=
```

- `cd` to base directory (with package.json), and do `npm install` the first time.
- Run `npm start`
- `localhost:8081` should now be able to run the frontend code.
