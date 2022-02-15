--- 
id: permissions-per-object-v3rc01 
title: PermissionsPerObject 
sidebar_label: PermissionsPerObject 
---Table that defines access permissions for a specified object. The object is any
referable element in the AAS. Additionally, object attributes can be defined that
further specify the kind of object the permissions apply to.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Object",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                }, {
                        name: "TargetObjectAttributes",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "ObjectAttributes",
        to: "object-attributes-v3rc01",
    }
    
                    }, {
                        name: "Permissions",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Permission",
        to: "permission-v3rc01",
    }
    
                    }]} /> 
 