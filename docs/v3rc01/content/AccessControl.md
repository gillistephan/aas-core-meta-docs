--- 
id: access-control-v3rc01 
title: AccessControl 
sidebar_label: AccessControl 
---Access Control defines the local access control policy administration point.
Access Control has the major task to define the access permission rules.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "AccessPermissionRules",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "AccessPermissionRule",
        to: "access-permission-rule-v3rc01",
    }
    
                    }, {
                        name: "SelectableSubjectAttributes",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                    name: "DefaultSubjectAttributes",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                }, {
                    name: "SelectablePermissions",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                }, {
                    name: "DefaultPermissions",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                }, {
                        name: "SelectableEnvironmentAttributes",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                        name: "DefaultEnvironmentAttributes",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 