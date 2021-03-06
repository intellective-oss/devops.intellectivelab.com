---
title: AccessRoles Tag Configuration
layout: docs
category: Unity 7
---
| **Note**: AccessRoles tag configuration is the same for Unity ExtJS and Unity React, however application behavior may differ.

[Choosing User Role feature description for Unity React](../../features/user-preferences/choosing-user-role.md)  

# Example of configuration

```xml
<AccessRoles groupCaseInsensitive="true" roleCaseInsensitive="false">
  <AccessRole description="" isDefault="false" name="canCheckOutDownload" system="true">
    <Allow name="#AUTHENTICATED-USERS" type="group"/>
  </AccessRole>
  <AccessRole description="" isDefault="true" name="Specialist" system="false">
    <Allow name="#AUTHENTICATED-USERS" type="group"/>
  </AccessRole>
  <!-- other access roles -->
</AccessRoles>
```

# AccessRoles Tag

`AccessRoles` tag attributes:

| Attribute            | Description |
|:---------------------|:------------|
| groupCaseInsensitive | `[true|false]` - group names are case insensitive/sensitive |
| roleCaseInsensitive  | `[true|false]` - role names are case insensitive/sensitive | 

`AccessRoles` is a container for `AccessRole` tag.

# AccessRole Tag

`AccessRole` tag attributes:

| Attribute            | Description |
|:---------------------|:------------|
| name | Access role name |
| description | Optional. Access role description |
| isDefault | `[true|false]` - determine whether role is default or not <sup>1</sup> |
| system | `[true|false]` - determine whether role is system or not  |

<sup>1</sup> No more than 1 role can be set as default, this role should also have `system` attribute = `false`. 
If specified, the system logs a user in with permissions for the default role. Otherwise a union of all roles 
assigned to the user account is used.

`AccessRole` tag can contain `Allow` and `Deny` rules with following attributes:

| Attribute            | Description |
|:---------------------|:------------|
| name | Principal name (the name of group or user) |
| type | `[group|user]` Principal type |
