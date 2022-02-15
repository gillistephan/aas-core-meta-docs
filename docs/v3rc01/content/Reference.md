--- 
id: reference-v3rc01 
title: Reference 
sidebar_label: Reference 
---Reference to either a model element of the same or another AAs or to an external
entity.

<p>
A reference is an ordered list of keys, each key referencing an element. The
complete list of keys may for example be concatenated to a path that then gives
unique access to an element or entity.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Keys",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Key",
        to: "key-v3rc01",
    }
    
                }]} /> 
 