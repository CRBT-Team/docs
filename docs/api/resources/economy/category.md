---
title: Category
---

import HTTP, { HTTPMethodBadge } from '@site/src/components/HTTPMethodBadge';

# Category Resource

Categories are identifiable containers for [items](./items), shown to differenciate and categorize items in a guild's store. Each category can hold up to 30 items.

:::caution
CRBT store categories not to be confused with Discord's category channels.
:::

## Get Category

<HTTPMethodBadge type="GET">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}
</HTTPMethodBadge>

Returns a [Category object](#category-object) for the given ID.

## Create Category

<HTTPMethodBadge type="POST">
  /guilds/{`{guild.id}`}/economy/categories
</HTTPMethodBadge>

Create a store category. Returns the created [Category object](#category-object) on success.

#### JSON params

| Field   | Type     | Description                                        |
| ------- | -------- | -------------------------------------------------- |
| `label` | `string` | The display name of the category.                  |
| `emoji` | `string` | The [emoji](/api/reference#emoji) of the category. |

## Modify Category

<HTTPMethodBadge type="PATCH">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}
</HTTPMethodBadge>

Modify a store category. Returns the updated [Category object](#category-object) on success.

:::info
All parameters to this endpoint are optional.
:::

#### JSON params

| Field    | Type     | Description                                        |
| -------- | -------- | -------------------------------------------------- |
| `label?` | `string` | The display name of the category.                  |
| `emoji?` | `string` | The [emoji](/api/reference#emoji) of the category. |

## Delete Category

<HTTPMethodBadge type="DELETE">
  /guilds/{`{guild.id}`}/economy/categories/{`{category.id}`}
</HTTPMethodBadge>

Delete a store category. Returns a `204 No Content` response on success.

## Category Object

### Category Structure

| Field      | Type                            | Description                                         |
| ---------- | ------------------------------- | --------------------------------------------------- |
| `id`       | `snowflake`                     | The ID of the category.                             |
| `guild_id` | `string`                        | The ID of the guild which this category belongs to. |
| `label`    | `string`                        | The display name of the category.                   |
| `emoji`    | `string`                        | The [emoji](/api/reference#emoji) of the category.  |
| `items`    | [`Item[]`](./items#item-object) | The items a category can hold (max 30).             |

#### Example Category

```json
{
  "id": "1086633399390572544",
  "guild_id": "782584672298729473",
  "label": "Seasonal",
  "emoji": "🍁",
  "items": [
    {
      "id": "1086693705814904834",
      "guild_id": "782584672298729473",
      "name": "Winter",
      "emoji": "❄️",
      "description": null,
      "price": 1,
      "category_id": "1086633399390572544",
      "type": 1,
      "stock": null,
      "available_until": null,
      "value": "967854051654000690"
    }
  ]
}
```
