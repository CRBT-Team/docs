---
title: Item
---

import HTTP, { HTTPMethodBadge } from '@site/src/components/HTTPMethodBadge';

# Item Resource

Items are virtual goods provided in a guild's store page. Each item belongs to a [category](./category), which can hold up to 30 items. A guild can hold up to 100 items total.

## Get Item

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}/items/{`{item.id}`}
</HTTPMethodBadge>

Returns a [Item object](#item-object) for the given ID.

## Create Item

<HTTPMethodBadge type="POST">
  /guilds/{`{guild.id}`}/economy/categories/items
</HTTPMethodBadge>

Create a category item. Returns the created [Item object](#category-object) on success.

#### JSON params

| Field              | Type                 | Description                                                                   |
| ------------------ | -------------------- | ----------------------------------------------------------------------------- |
| `name`             | `string`             | The display name of the item.                                                 |
| `emoji`            | `string`             | The [emoji](/api/reference#emoji) of the item.                                |
| `price`            | `integer`            | The price of the item, as a positive integer.                                 |
| `value`            | `string?`            | The item's value, whose type change depending on the [item type](#item-type). |
| `type`             | `integer`            | The item's [type](#item-type).                                                |
| `description?`     | `string?`            | A 1-1024 character description of the item.                                   |
| `stock?`           | `integer?`           | The item's max stock, `null` if unlimited (max 200000).                       |
| `available_until?` | `ISO8601 timestamp?` | When the item should expire from the store, `null` if not limited.            |

## Modify Item

<HTTPMethodBadge type="PATCH">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}
</HTTPMethodBadge>

Modify a store category. Returns the updated [Category object](#category-object) on success.

:::info
All parameters to this endpoint are optional.
:::

#### JSON params

| Field              | Type                 | Description                                                        |
| ------------------ | -------------------- | ------------------------------------------------------------------ |
| `name?`            | `string`             | The display name of the item.                                      |
| `emoji?`           | `string`             | The [emoji](/api/reference#emoji) of the item.                     |
| `price?`           | `integer`            | The price of the item, as a positive integer.                      |
| `value?` \*        | `string?`            | The item's value.                                                  |
| `description?`     | `string?`            | A 1-1024 character description of the item.                        |
| `stock?`           | `integer?`           | The item's max stock, `null` if unlimited (max 200000).            |
| `available_until?` | `ISO8601 timestamp?` | When the item should expire from the store, `null` if not limited. |

\* The value must match the original item's [type](#item-type).

## Delete Item

<HTTPMethodBadge type="DELETE">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}/items/{`{item.id}`}
</HTTPMethodBadge>

Delete a category item. Returns a `204 No Content` response on success.

## Item Object

### Item Structure

| Field             | Type                 | Description                                                                   |
| ----------------- | -------------------- | ----------------------------------------------------------------------------- |
| `id`              | `snowflake`          | The ID of the item.                                                           |
| `name`            | `string`             | The display name of the item.                                                 |
| `emoji`           | `string`             | The [emoji](/api/reference#emoji) of the item.                                |
| `description`     | `string?`            | A 1-1024 character description of the item.                                   |
| `price`           | `integer`            | The price of the item, as a positive integer.                                 |
| `stock`           | `integer?`           | The item's max stock, `null` if unlimited (max 200000).                       |
| `available_until` | `ISO8601 timestamp?` | When the item should expire from the store, `null` if not limited.            |
| `value`           | `string?`            | The item's value, whose type change depending on the [item type](#item-type). |
| `type`            | `integer`            | The item's [type](#item-type).                                                |
| `guild_id`        | `string`             | The ID of the guild which this item belongs to.                               |
| `category_id`     | `string`             | The ID of the category which this item belongs to.                            |

### Item Type

| Name             | Integer | Description                                                                                                                                       | Required Value Type                                                              |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Other            | 0       | A value-less item.                                                                                                                                | `null`                                                                           |
| Role             | 1       | Using this item shall grant the user with a Discord guild role.                                                                                   | `snowflake`                                                                      |
| IncomeMultiplier | 2       | When in use, multiplies the user's income in income commands. Does not affect [Modify User Money](#modify-user-money) queries on the server-side. | Any value matching the `/x[0-9]{1,2}(\.[0-9]{1,2})?/` regex (e.g. `x2`, `x0.75`) |
| Cosmetic         | 3       | Reveals a image, useful for collection-based economy items.                                                                                       | An image URL                                                                     |
| Weapon           | 4       | Very dangerous, do not use.                                                                                                                       | undefined                                                                        |

#### Example Item

```json
{
  "id": "1086693705814904834",
  "guild_id": "782584672298729473",
  "name": "Boost",
  "emoji": "🚀",
  "description": "Max out your Purplets with 2 times more income!",
  "price": 1000,
  "category_id": "1086633399390572544",
  "type": 2,
  "stock": 10,
  "available_until": "2023-03-20T00:00:00.000Z",
  "value": "x2"
}
```
