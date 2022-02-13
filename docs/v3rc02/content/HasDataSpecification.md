--- 
id: has-data-specification-v3rc02 
title: HasDataSpecification 
sidebar_label: HasDataSpecification 
---

Element that can be extended by using data specification templates.

<p>
A data specification template defines a named set of additional attributes an
element may or shall have. The data specifications used are explicitly specified
with their global ID.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "DataSpecifications",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                }]} /> 
 
