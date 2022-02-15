--- 
id: access-control-policy-points-v3rc01 
title: AccessControlPolicyPoints 
sidebar_label: AccessControlPolicyPoints 
---Container for access control policy points.

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
                    name: "PolicyDecisionPoint",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "PolicyDecisionPoint",
        to: "policy-decision-point-v3rc01",
    }
    
                }, {
                    name: "PolicyEnforcementPoint",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "PolicyEnforcementPoints",
        to: "policy-enforcement-points-v3rc01",
    }
    
                }, {
                        name: "PolicyInformationPoints",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "PolicyInformationPoints",
        to: "policy-information-points-v3rc01",
    }
    
                    }]} /> 
 