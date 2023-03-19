---
title: Guild
---

import HTTP, { HTTPMethodBadge } from '@site/src/components/HTTPMethodBadge';

# Guild Resource

Guilds are referred to as "Servers" in the Discord app.

:::info
To access these endpoints, you will need to use a token you registered with a Guild ID field.
:::

[Guilds Resource on Discord API Docs](https://discord.com/developers/docs/resources/guild)

## Get Guild

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}
</HTTPMethodBadge>

Returns a [Guild object](#guild-object) for the given ID.

## Modify Guild

<HTTPMethodBadge type="PATCH">
  /guilds/{`{guild.id}`}
</HTTPMethodBadge>

Modify a guild's settings. Returns the updated [Guild object](#guild-object) on success.

:::info
All parameters to this endpoint are optional.
:::

#### JSON params

| Field                       | Type        | Description                                                                  |
| --------------------------- | ----------- | ---------------------------------------------------------------------------- |
| `accent_color?`             | `integer`   | The guild's accent color as an integer.                                      |
| `auto_theming_enabled?`     | `boolean`   | Whether to enable Automatic Theming.                                         |
| `join_channel_id?`          | `snowflake` | The channel ID where [Welcome Messages](#get-guild-join-message) are sent.   |
| `leave_channel_id?`         | `snowflake` | The channel ID where [Farewell Messages](#get-guild-leave-message) are sent. |
| `notifications_channel_id?` | `snowflake` | The channel ID where Moderation Notifications are sent.                      |
| `reports_channel_id?`       | `snowflake` | The channel ID where Moderation Reports are sent.                            |

## Get Guild Join Message

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/join-message
</HTTPMethodBadge>

Returns a [Guild Join/Leave Message object](#guild-joinleave-message-object) for the given ID. Referred to as "Welcome Message" within the app.

## Get Guild Leave Message

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/leave-message
</HTTPMethodBadge>

Returns a [Guild Join/Leave Message object](#guild-joinleave-message-object) for the given ID. Referred to as "Farewell Message" within the app.

## Get Guild Polls

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/polls
</HTTPMethodBadge>

Returns an array of [Poll objects](./polls#poll-object) for this guild.

## Guild Object

### Guild Structure

| Field                      | Type         | Description                                                                                                    |
| -------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `id`                       | `snowflake`  | The ID of the guild.                                                                                           |
| `accent_color`             | `integer`    | The guild's accent color as an integer.                                                                        |
| `flags`                    | `integer`    | The guild's public [flags](#guild-flags).                                                                      |
| `auto_theming_enabled`     | `boolean`    | `true` if the guild has Automatic Theming enabled.                                                             |
| `icon`                     | `string?`    | The lastly cached [image hash](https://discord.com/developers/docs/reference#image-formatting) for this guild. |
| `join_channel_id`          | `snowflake?` | The channel ID where [Welcome Messages](#get-guild-join-message) are sent.                                     |
| `leave_channel_id`         | `snowflake?` | The channel ID where [Farewell Messages](#get-guild-leave-message) are sent.                                   |
| `notifications_channel_id` | `snowflake?` | The channel ID where Moderation Notifications are sent.                                                        |
| `reports_channel_id`       | `snowflake?` | The channel ID where Moderation Reports are sent.                                                              |
| `modules`                  | `Modules`    | A modules object.                                                                                              |

### Guild Flags

| Value  | Name         | Description                                |
| ------ | ------------ | ------------------------------------------ |
| 1 << 0 | HasEconomy   | Whether the guild can access to Economy    |
| 1 << 1 | HasLeveling  | Whether the guild can access to Leveling   |
| 1 << 3 | HasChatMoney | Whether the guild can access to Chat Money |

#### Example Guild

```json
{
  "id": "738747595438030888",
  "accent_color": 16743291,
  "flags": 0,
  "auto_theming_enabled": true,
  "icon": null,
  "join_channel_id": "843141931504631818",
  "leave_channel_id": "843141931504631818",
  "notifications_channel_id": "1070375756477255732",
  "reports_channel_id": "1070375756477255732",
  "modules": {
    "economy": false,
    "joinMessage": false,
    "leaveMessage": false,
    "moderationLogs": false,
    "moderationReports": false
  }
}
```

## Guild Join/Leave Message object

### Guild Join/Leave Message structure

| Field     | Type                                                                           | Description                                                                |
| --------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `content` | `string?`                                                                      | The message content.                                                       |
| `type`    | `string`                                                                       | `JOIN_MESSAGE` or `LEAVE_MESSAGE` depending on the message type.           |
| `embed`   | [`Embed?`](https://discord.com/developers/docs/resources/channel#embed-object) | The message embed.                                                         |
| `script`  | `string?`                                                                      | The message script. Should contain [CRBTscript](/crbtscript/intro) syntax. |

#### Example Guild Join/Leave Message

```json
{
  "type": "JOIN_MESSAGE",
  "content": "<user.mention>",
  "embed": {
    "title": "", //*
    "description": "We hope you'll enjoy your stay!", //*
    "url": null,
    "color": 15888775,
    "image": {
      "url": "<user.avatar>" //*
    },
    "author": {
      "url": "",
      "name": "<user.tag> - Welcome!", //*
      "icon_url": "<user.avatar>" //*
    },
    "fields": [], //**
    "footer": {
      "text": "For any inquiries, please turn to #support.", //*
      "icon_url": "https://crbt.app/favicon.ico" //*
    },
    "thumbnail": {
      "url": "<guild.icon>"
    }
  }
}
```

\* Supports [CRBTscript](/crbtscript/intro) syntax.

\*\* Not implemented in the message builder provided in the CRBT UI.
