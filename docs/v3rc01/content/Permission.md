--- 
id: permission-v3rc01 
title: Permission 
sidebar_label: Permission 
---Description of a single permission.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Permission",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                }, {
                    name: "KindOfPermission",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "PermissionKind",
        to: "permission-kind-v3rc01",
    }
    
                }]} /> 
 