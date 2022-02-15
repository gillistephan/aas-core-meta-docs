--- 
id: policy-administration-point-v3rc01 
title: PolicyAdministrationPoint 
sidebar_label: PolicyAdministrationPoint 
---Definition of a security policy administration point (PAP).

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "ExternalAccessControl",
                    isRequired: true,
                    typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.BOOL",
        to: null,
    }
    
                }, {
                        name: "LocalAccessControl",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "AccessControl",
        to: "access-control-v3rc01",
    }
    
                    }]} /> 
 