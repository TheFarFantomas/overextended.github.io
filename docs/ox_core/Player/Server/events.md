---
title: Events
---

## Server events

### ox:playerLoaded

Triggered after a player has selected a character.

```lua
AddEventHandler('ox:playerLoaded', function(source, userid, charid) end)
```

### ox:setGroup

Triggered when a player's grade in a group is modified with `player.setGroup`.

```lua
AddEventHandler('ox:setGroup', function(source, group, grade) end)
```

### ox:playerLogout

Triggered when a player logs out from their current character or disconnects from the server.

```lua
AddEventHandler('ox:playerLogout', function(source, userid, charid) end)
```

### ox:characterDeleted

Triggered when a player has deleted a character.

```lua
AddEventHandler('ox:characterDeleted', function(source, userid, charid) end)
```

### ox:licenseAdded

Triggered when a player has been granted a license.

```lua
AddEventHandler('ox:licenseAdded', function(source, name) end)
```

### ox:licenseRemoved

Triggered when a player's license is revoked.

```lua
AddEventHandler('ox:licenseRemoved', function(source, name) end)
```

## Networked events

### ox:playerDeath

Triggered on player death and revival.

```lua
RegisterNetEvent('ox:playerDeath', function(isDead) end)
```

### ox:setPlayerInService

Can be triggered to set a player as "in service" for a specific group they are a member of.

```lua
RegisterNetEvent('ox:setPlayerInService', function(group) end)
```
