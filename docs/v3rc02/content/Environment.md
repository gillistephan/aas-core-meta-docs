--- 
id: environment-v3rc02 
title: Environment 
sidebar_label: Environment 
---Model the environment as the entry point for referencing and serialization.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "AssetAdministrationShells",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "AssetAdministrationShell",
        to: "asset-administration-shell-v3rc02",
    }
    
                },{
                    name: "Submodels",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Submodel",
        to: "submodel-v3rc02",
    }
    
                },{
                    name: "ConceptDescriptions",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "ConceptDescription",
        to: "concept-description-v3rc02",
    }
    
                }]} /> 
 
