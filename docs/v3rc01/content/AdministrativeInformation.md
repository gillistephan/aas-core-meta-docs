--- 
id: administrative-information-v3rc01 
title: AdministrativeInformation 
sidebar_label: AdministrativeInformation 
---Administrative meta-information for an element like version information.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "DataSpecifications",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                        name: "Version",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    }, {
                        name: "Revision",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    }]} /> 
 