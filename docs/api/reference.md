# Reference

The CRBT API uses the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture based on the HTTPS protocol.

#### Base URL

```
https://crbt.app/api
```

## API Versioning

To prevent breaking changes in older versions of certain endpoints, the CRBT API uses a versioning system where you can specify which version to use by formatting the base URL as such `https://crbt.app/api/v{version_number}`. Versions marked as (Beta) are subject to changes without prior notice.

:::note
Omitting the version number will fall back to the version marked as default below.
:::

| Version | Status           | Default |
| ------- | ---------------- | ------- |
| 1       | Available (Beta) | Yes     |

## Authorization

Most of CRBT's endpoints are locked behind a token, which carry your app's permissions on the API. They are very sensitive, so be sure to never share your token with anyone or within any version control system. To store your token, a best practice is to use a password manager like [Bitwarden](https://bitwarden.com) (not sponsored).

### Get an API token

For the time being, the only way to register a CRBT API token is by filling the [API application form](https://forms.gle/EEiGYzNK8AM9kqw28).

:::note
When filling your application, make sure to fill the Guild ID field with whatever server you own, in order to be able to access the [Guild endpoints](./resources/guilds.md).
:::

### Using the API token

When using a protected endpoint, you must include the token in the `Authorization` HTTP header, formatted as `Authorization: YOUR_CRBT_API_TOKEN`.

#### Example Authorization Header (JavaScript)

```ts
await fetch(`https://crbt.app/api/users/327690719085068289`, {
  headers: {
    Authorization: CRBT_TOKEN,
  },
});
```

## Snowflakes

CRBT uses Twitter's snowflake format for IDs, with the starting timestamp set to Discord's epoch.

See the [Discord developer documentation](https://discord.com/developers/docs/reference#snowflakes) for more information.

## Emoji

CRBT uses Discord's [emoji message formatting](https://discord.com/developers/docs/reference#message-formatting) wherever present in the API.

In practice, this means that unlike Discord's API where emoji must be sent as an [Emoji Object](https://discord.com/developers/docs/resources/emoji#emoji-object), CRBT takes a string input, either matching the `<a:emojiName:216154654256398347>` syntax for custom emoji, or standard Unicode characters `👀` for standard emoji.

## Rate Limits

The CRBT API implements rate limiting to prevent spam and server overload. Throughout all routes, you are limited to 5 API requests every 10 seconds, after which you exceed the rate limit and are put on hold for the next 10 seconds following your last request within the time window.

When a rate limit is exceeded, the API returns a 429 HTTP response code with a JSON error message showing details about the error.

### Rate Limit Structure

| Field       | Type    | Description                                                           |
| ----------- | ------- | --------------------------------------------------------------------- |
| error       | string  | The error message.                                                    |
| retry_after | integer | The number of milliseconds to wait before submitting another request. |

#### Example Exceeded Rate Limit Body

```json
{
  "error": "Rate limited",
  "retry_after": 481
}
```
