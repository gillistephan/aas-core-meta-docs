--- 
id: blob-certificate-v3rc01 
title: BlobCertificate 
sidebar_label: BlobCertificate 
---Certificate provided as BLOB

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "PolicyAdministrationPoint",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "PolicyAdministrationPoint",
        to: "policy-administration-point-v3rc01",
    }
    
                }, {
                    name: "BlobCertificate",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Blob",
        to: "blob-v3rc01",
    }
    
                }, {
                    name: "LastCertificate",
                    isRequired: true,
                    typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.BOOL",
        to: null,
    }
    
                }, {
                        name: "ContainedExtension",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 
