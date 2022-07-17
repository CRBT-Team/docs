# Introduction

**Base URL: `crbt.app/api`**

## Getting started

1. Register a token [here](https://forms.gle/EEiGYzNK8AM9kqw28), make sure to include the Guild ID field to use the Guild endpoints.
2. When using an endpoint, include the token in the Authorization header as such:

```ts
await fetch(`${baseURL}/api/users/${userID}`, {
  headers: {
    Authorization: CRBT_TOKEN,
  },
});
```

3. Some endpoints will work without the Authorization header, but their usage could be restricted.
