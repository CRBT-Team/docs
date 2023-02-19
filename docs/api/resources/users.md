---
title: User
sidebar_position: 1
---

# Users Resource

[Users Resource on Discord API Docs](https://discord.com/developers/docs/resources/user)

## Get User

`GET /users/{user.id}`

Returns a [CRBT User object](#example-crbt-user-object) for a given user ID.

### CRBT User structure

| Property          | Type                                   | Description                                                                                             |
| ----------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`              | `snowflake`                            | The ID of the user                                                                                      |
| `accentColor`     | `integer`                              | The user's CRBT accent color as an integer. If set to 0, CRBT syncs it with their Discord profile color |
| `crbtBadges`      | [`CRBTBadge[]`](#crbt-badge-sturcture) | A user's CRBT badges, shown on User Info                                                                |
| `telemetry` \*    | `boolean`                              | If the user has enabled Command Telemetry. [Learn more](https://crbt.app/policy)                        |
| `silentJoins` \*  | `boolean`                              | Whether CRBT should announce when they join a server                                                    |
| `silentLeaves` \* | `boolean`                              | Whether CRBT should announce when they leave a server                                                   |

\* These properties can only be seen for a user requesting their own data.

### Example CRBT User object

```json
{
  "id": "327690719085068289",
  "accentColor": 16743291,
  "telemetry": true,
  "silentJoins": false,
  "silentLeaves": false,
  "crbtBadges": [
    {
      "id": "developer",
      "name": "CRBT Developer",
      "contents": "🧑‍💻"
    }
  ]
}
```

### CRBT Badge sturcture

| Property   | Type     | Description                                                                                  |
| ---------- | -------- | -------------------------------------------------------------------------------------------- |
| `id`       | `string` | The ID of the badge                                                                          |
| `name`     | `string` | The full name of the badge                                                                   |
| `contents` | `string` | The display emoji of the badge. Shows as a Unicode emoji or emoji mention for custom emojis. |
