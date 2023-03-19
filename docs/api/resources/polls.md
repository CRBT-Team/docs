---
title: Poll
---

import HTTP, { HTTPMethodBadge } from '@site/src/components/HTTPMethodBadge';

# Poll Resource

The polls feature allow permitted guild members to gather opinion via simple queries. A guild can have up to 10 polls.

## Get Poll

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/polls/{`{poll.id}`}
</HTTPMethodBadge>

Returns a [Poll object](#poll-object) for the given ID.

:::note
When querying a v1 poll using the `{snowflake}/{snowflake}` ID format, you must replace the slash with an underscore (e.g. `/.../polls/1068620321697038396_1079570054640832625` for a poll with `1068620321697038396/1079570054640832625` as its ID).
:::

## Create Poll

<HTTPMethodBadge type="POST">
  /guilds/{`{guild.id}`}/polls
</HTTPMethodBadge>

Create a poll. Returns the created [Poll object](#poll-object) on success.

#### JSON params

| Field        | Type                | Description                                                                                               |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `channel_id` | `snowflake`         | The ID of the channel where the poll was created.                                                         |
| `message_id` | `snowflake`         | The ID of the message which the poll reacts to.                                                           |
| `creator_id` | `snowflake`         | The ID of the user who created the poll. Set to `@me` to use the current user.                            |
| `locale`     | `string`            | The [locale](https://discord.com/developers/docs/reference#locales) to use for the poll's results screen. |
| `title`      | `string`            | The title of the poll.                                                                                    |
| `choices`    | `string[]`          | An array of choice names. (max 4)                                                                         |
| `end_date`   | `ISO8601 timestamp` | When the poll should automatically end.                                                                   |

## Modify Poll

<HTTPMethodBadge type="PATCH">
  /guilds/{`{guild.id}`}/polls/{`{poll.id}`}
</HTTPMethodBadge>

Modify a poll. Returns the updated [Poll object](#poll-object) on success.

:::note
When querying a v1 poll using the `{snowflake}/{snowflake}` ID format, you must replace the slash with an underscore (e.g. `/.../polls/1068620321697038396_1079570054640832625` for a poll with `1068620321697038396/1079570054640832625` as its ID).
:::

:::info
All parameters to this endpoint are optional.
:::

#### JSON params

| Field       | Type                | Description                                                                                                       |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `title?`    | `string`            | The title of the poll.                                                                                            |
| `choices?`  | `string[]`          | An array of choice names, must be of the same length as the original. Each new name will replace the former name. |
| `end_date?` | `ISO8601 timestamp` | When the poll should automatically end.                                                                           |

## Delete Poll

<HTTPMethodBadge type="DELETE">
  /guilds/{`{guild.id}`}/polls/{`{poll.id}`}
</HTTPMethodBadge>

Delete a poll. Returns a `204 No Content` response on success.

:::note
When querying a v1 poll using the `{snowflake}/{snowflake}` ID format, you must replace the slash with an underscore (e.g. `/.../polls/1068620321697038396_1079570054640832625` for a poll with `1068620321697038396/1079570054640832625` as its ID).
:::

## Poll Object

### Poll Structure

:::caution
On March 30, 2023, every new poll created must use the new poll structure with the fields below marked with "(v2)".

Whenever all former v1 polls expire, v2 will be set as the default API and v1 documentation will be removed.
:::

| Field                | Type                                 | Description                                                                            |
| -------------------- | ------------------------------------ | -------------------------------------------------------------------------------------- |
| `id` (v1)            | `{snowflake}/{snowflake}`            | The channel ID and the message ID of the poll, separated by slashes.                   |
| `id` (v2)            | `snowflake`                          | The ID of the poll.                                                                    |
| `guild_id`           | `snowflake`                          | The ID of the guild where the poll was created.                                        |
| `channel_id`         | `snowflake`                          | The ID of the channel where the poll was created.                                      |
| `message_id`         | `snowflake`                          | The ID of the message which the poll reacts to.                                        |
| `creator_id`         | `snowflake`                          | The ID of the user who created the poll.                                               |
| `locale`             | `string`                             | The guild's [preferred locale](https://discord.com/developers/docs/reference#locales). |
| `title?` (v2)        | `string`                             | The title of the poll.                                                                 |
| `choices?` (v2)      | [`Choice[]`](#poll-choice-structure) | The poll's choices.                                                                    |
| `choice_count?` (v1) | `integer`                            | How many choices the poll has.                                                         |
| `participants?` (v1) | `[snowflake][]`                      | An array of arrays for each choice, with each value mapped to their participants.      |
| `end_date`           | `ISO8601 timestamp`                  | When the poll should automatically end.                                                |

(v1): Only present for old polls created before March 30, 2023

(v2): Only present for new polls created after March 30, 2023

#### Example Poll (v1)

```json
{
  "id": "1068620321697038396/1079570054640832625",
  "channel_id": "1068620321697038396",
  "message_id": "1079570054640832625",
  "creator_id": "327690719085068289",
  "guild_id": "782584672298729473",
  "locale": "en-US",
  "end_date": "2023-03-20T01:06:05.069Z",
  "choice_count": 2,
  "participants": [["876108071519268884"], ["327690719085068289"]]
}
```

#### Example Poll (v2)

```json
{
  "id": "1086693705814904834",
  "channel_id": "1068620321697038396",
  "message_id": "1079570054640832625",
  "creator_id": "327690719085068289",
  "guild_id": "782584672298729473",
  "locale": "en-US",
  "title": "What should we get to eat?",
  "choices": [
    {
      "name": "Pizzas",
      "participants": ["876108071519268884"]
    },
    {
      "name": "Sushi",
      "participants": ["327690719085068289"]
    }
  ],
  "end_date": "2023-03-20T01:06:05.069Z"
}
```

### Poll Choice structure

| Field          | Type          | Description                                |
| -------------- | ------------- | ------------------------------------------ |
| `name`         | `string`      | The name of the choice.                    |
| `participants` | `snowflake[]` | An array of all of participants' user IDs. |

#### Example Poll Choice

```json
[
  {
    "name": "Earth",
    "participants": ["876108071519268884", "216136238426619904"]
  },
  {
    "name": "Wind",
    "participants": ["244905301059436545", "595731552709771264"]
  },
  {
    "name": "Fire",
    "participants": ["327690719085068289", "2157N16470F53P73M83R"]
  }
]
```
