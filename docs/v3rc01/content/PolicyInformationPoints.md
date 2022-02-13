--- 
id: policy-information-points-v3rc01 
title: PolicyInformationPoints 
sidebar_label: PolicyInformationPoints 
---Defines the security policy information points (PIP).
Serves as the retrieval source of attributes, or the data required for policy
evaluation to provide the information needed by the policy decision point to make
the decisions.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "ExternalInformationPoints",
                    isRequired: true,
                    typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.BOOL",
        to: null,
    }
    
                },{
                        name: "InternalInformationPoints",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 
