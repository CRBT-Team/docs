---
title: Guild
sidebar_position: 2
---

# Guilds Resource

Guilds are referred as "Servers" in the Discord app.

To access these endpoints, you will need to use a token you registered with a Guild ID field.

[Guilds Resource on Discord API Docs](https://discord.com/developers/docs/resources/guild)

## Get Guild Settings

`GET /guilds/{guild.id}`

Get a guild's settings.

### Guild Settings structure

| Property            | Type         | Description                                                                                    |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| `id`                | `snowflake`  | The ID of the guild                                                                            |
| `accentColor`       | `integer`    | The guild's accent color as an integer                                                         |
| `flags`             | `integer`    | The guild's public flags                                                                       |
| `automaticTheming`  | `boolean`    | true if the guild has Automatic Theming enabled                                                |
| `iconHash`          | `string?`    | The lastly cached [image hash](https://discord.com/developers/docs/reference#image-formatting) |
| `joinChannel`       | `snowflake?` | The channel ID where [Welcome Messages](#get-guild-join-message) are sent                      |
| `leaveChannel`      | `snowflake?` | The channel ID where [Farewell Messages](#get-guild-leave-message) are sent                    |
| `modLogsChannel`    | `snowflake?` | The channel ID where Moderation Notifications are sent                                         |
| `modReportsChannel` | `snowflake?` | The channel ID where Moderation Reports are sent                                               |
| `modules`           | `Modules`    | A modules object                                                                               |

### Example Guild Settings object

```json
{
  "id": "738747595438030888",
  "accentColor": 16743291,
  "flags": 0,
  "automaticTheming": true,
  "iconHash": null,
  "joinChannel": "843141931504631818",
  "leaveChannel": "843141931504631818",
  "modLogsChannel": "1070375756477255732",
  "modReportsChannel": "1070375756477255732",
  "modules": {
    "economy": false,
    "joinMessage": false,
    "leaveMessage": false,
    "moderationLogs": false,
    "moderationReports": false
  }
}
```

## Get Guild Join Message

`GET /guilds/{guild.id}/join-message`

Get a guild's join channel and raw message. These are referred as "Welcome messages" in the CRBT bot.

### Guild Join Message structure

| Property              | Type                                                                           | Description                 |
| --------------------- | ------------------------------------------------------------------------------ | --------------------------- |
| `joinMessage`         | `Object?`                                                                      | The guild's join message    |
| `joinMessage.content` | `string?`                                                                      | The message content         |
| `joinMessage.embed`   | [`Embed?`](https://discord.com/developers/docs/resources/channel#embed-object) | The message embed           |
| `joinMessage.script`  | `string?`                                                                      | The message script          |
| `joinChannel`         | `string?`                                                                      | The guild's join channel ID |

### Example Guild Join Message object

```json
{
  "joinMessage": {
    "embed": {
      "url": null,
      "color": 15888775, //*
      "image": {
        "url": "<user.avatar>"
      },
      "title": "",
      "author": {
        "url": "", //*
        "name": "<user.tag> - Welcome!",
        "icon_url": "<user.avatar>" //*
      },
      "fields": [], //**
      "footer": {},
      "thumbnail": {
        "url": "<guild.icon>"
      },
      "description": "We hope you'll enjoy your stay! \nNote: for any inquiries regarding CRBT, please head over to #support."
    },
    "content": "<user.mention>"
  },
  "joinChannel": "843141931504631818"
}
```

:::note

[CRBTscript](https://crbt.app/docs/crbtscript) is accepted in most of the fields, except for the ones marked with an asterisk.

:::

\* Does not support CRBTscript

\*\* Not implemented in the message builder provided in the CRBT UI.

## Get Guild Leave Message

`GET /guilds/{guild.id}/leave-message`

Get a guild's leave channel and raw message. These are referred as "Farewell messages" in the CRBT bot.

## Get Guild Economy

`GET /guilds/{guild.id}/economy`

WIP: Will be released when Economy is released on CRBT.
