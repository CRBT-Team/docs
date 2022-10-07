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

| Parameter                         | Type       | Description                                                                                                                                |
| --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                              | `string`   | The ID of the user                                                                                                                         |
| `accentColor`                     | `string`   | The user's CRBT accent color as an hex color code, prefixed with #. Returns 'profile' if the users syncs with their Discord profile color. |
| `birthday` \* (deprecated)        | `string?`  | Deprcated. The user's CRBT Profile birthday                                                                                                |
| `privacy` \*                      | `object?`  | The privacy settings of the user                                                                                                           |
| `privacy.joinMessagesEnabled` \*  | `boolean?` | Whether the user has enabled join messages                                                                                                 |
| `privacy.leaveMessagesEnabled` \* | `boolean?` | Whether the user has enabled leave messages                                                                                                |

\* Can only be accessed by the user themselves.

### Example CRBT User object

```json
{
  "id": "327690719085068289",
  "accentColor": "#6543ff",
  "birthday": "2006-07-05T10:00:00.000Z",
  "privacy": {
    "joinMessagesEnabled": true,
    "leaveMessagesEnabled": true
  }
}
```
