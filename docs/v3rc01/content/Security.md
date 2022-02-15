--- 
id: security-v3rc01 
title: Security 
sidebar_label: Security 
---Container for security relevant information of the AAS.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "AccessControlPolicyPoints",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "AccessControlPolicyPoints",
        to: "access-control-policy-points-v3rc01",
    }
    
                }, {
                        name: "Certificates",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Certificate",
        to: "certificate-v3rc01",
    }
    
                    }, {
                        name: "RequiredCertificatesExtension",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 