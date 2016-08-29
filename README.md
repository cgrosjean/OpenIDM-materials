# OpenIDM-materials

The couple of certification workflows below were initially bundled with OpenIDM 3.1. They're provided here for OpenIDM 4.0 and OpenIDM 4.5

- The entitlements certification workflow enables the systemadmin user to validate or change the assignments (attribute values only) defined in OpenIDM.

- The roles certification workflow allows a manager to review and/or update his reports roles. It features an escalation option as well as the ability to deal with both static and dynamic roles. The dynamic roles inherited by a user can not be edited, since computed by the effectiveRoles.js script, which should be copied to the script/roles project subdirectory.
The effectiveRoles.js script which is used to compute a user's dynamic roles is different between OpenIDM 4.0 and OpenIDM 4.5 since the latter deals with temporal constraints which are a new feature of OpenIDM 4.5.

