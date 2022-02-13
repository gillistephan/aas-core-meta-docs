--- 
id: asset-information-v3rc02 
title: AssetInformation 
sidebar_label: AssetInformation 
---Identifying meta data of the asset that is represented by an AAS.

<p>
The asset may either represent an asset type or an asset instance. The asset has
a globally unique identifier plus – if needed – additional domain-specific
(proprietary) identifiers. However, to support the corner case of very first
phase of lifecycle where a stabilised/constant global asset identifier does not
already exist, the corresponding attribute <see cref="AssetInformation.GlobalAssetId" /> is optional.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "AssetKind",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "AssetKind",
        to: "asset-kind-v3rc02",
    }
    
                },{
                        name: "GlobalAssetId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                    },{
                        name: "SpecificAssetId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "IdentifierKeyValuePair",
        to: "identifier-key-value-pair-v3rc02",
    }
    
                    },{
                        name: "DefaultThumbnail",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "File",
        to: "file-v3rc02",
    }
    
                    }]} /> 
 
