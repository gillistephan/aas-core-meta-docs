--- 
id: has-extensions-v3rc02 
title: HasExtensions 
sidebar_label: HasExtensions 
---

Element that can be extended by proprietary extensions.

<p>
Note: Extensions are proprietary, i.e. they do not support global interoperability.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Extensions",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Extension",
        to: "extension-v3rc02",
    }
    
                }]} /> 
 
