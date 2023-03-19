---
title: Economy
---

import HTTP, { HTTPMethodBadge } from '@site/src/components/HTTPMethodBadge';

# Economy Resource

Economy is a new CRBT feature which allows guilds to create their own virtual currency, store and items. They are unique to each guild and do not map to anything on the Discord app.

:::info
To access these endpoints, you will need to use a token you registered with a Guild ID field.
:::

## Get Economy

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/economy
</HTTPMethodBadge>

Returns a [Economy object](#economy-object) for the given ID, or a 404 error message if no economy was initialized.

## Create Economy

<HTTPMethodBadge type="POST">
  /guilds/{`{guild.id}`}/economy
</HTTPMethodBadge>

Initialize a guild's economy. Returns the complete [Economy object](#economy-object) on success.

#### JSON params

| Field                          | Type         | Description                                                              |
| ------------------------------ | ------------ | ------------------------------------------------------------------------ |
| `currency_name_singular`       | `string`     | The singular name of the guild's currency.                               |
| `currency_name_plural`         | `string`     | The plural name of the guild's currency.                                 |
| `currency_symbol`              | `string`     | The symbol of the guild's currency, as en [emoji](/api/reference#emoji). |
| `transaction_logs_channel_id?` | `snowflake?` | The channel ID where transaction logs are sent.                          |

## Modify Economy

<HTTPMethodBadge type="PATCH">
  /guilds/{`{guild.id}`}/economy
</HTTPMethodBadge>

Modify a guild's economy. Returns the updated [Economy object](#economy-object) on success.

:::info
All parameters to this endpoint are optional.
:::

#### JSON params

| Field                          | Type        | Description                                                              |
| ------------------------------ | ----------- | ------------------------------------------------------------------------ |
| `currency_name_singular?`      | `string`    | The singular name of the guild's currency.                               |
| `currency_name_plural?`        | `string`    | The plural name of the guild's currency.                                 |
| `currency_symbol?`             | `string`    | The symbol of the guild's currency, as en [emoji](/api/reference#emoji). |
| `transaction_logs_channel_id?` | `snowflake` | The channel ID where transaction logs are sent.                          |

## Economy Object

### Economy Structure

| Field                         | Type                                       | Description                                                              |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                          | `snowflake`                                | The ID of the guild.                                                     |
| `currency_name_singular`      | `string`                                   | The singular name of the guild's currency.                               |
| `currency_name_plural`        | `string`                                   | The plural name of the guild's currency.                                 |
| `currency_symbol`             | `string`                                   | The symbol of the guild's currency, as en [emoji](/api/reference#emoji). |
| `transaction_logs_channel_id` | `snowflake?`                               | The channel ID where transaction logs are sent.                          |
| `categories`                  | [`Category[]`](./category#category-object) | An array of the guild's store categories, without their items.           |
| `item_count`                  | `integer`                                  | The number of [items](#item-object) a guild can hold (max 100).          |

#### Example Economy

```json
{
  "id": "738747595438030888",
  "currency_name_singular": "Purplet",
  "currency_name_plural": "Purplets",
  "currency_symbol": "<:purplet:866116902215745576>",
  "categories": [],
  "item_count": 0
}
```
