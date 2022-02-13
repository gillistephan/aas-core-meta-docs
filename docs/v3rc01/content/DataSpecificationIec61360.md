--- 
id: data-specification-iec-61360-v3rc01 
title: DataSpecificationIec61360 
sidebar_label: DataSpecificationIec61360 
---Content of data specification template for concept descriptions conformant to
IEC 61360.
Although the IEC61360 attributes listed in this template are defined for properties
and values and value lists only it is also possible to use the template for other
definition This is shown in the tables Table 7, Table 8, Table 9 and Table 10.

<p>
Constraint AASd-075: For all ConceptDescriptions using data specification template
IEC61360
(http://admin-shell.io/DataSpecificationTemplates/DataSpecificationIEC61360/2/0)
values for the attributes not being marked as mandatory or optional in tables
Table 7, Table 8, Table 9 and Table 10.depending on its category are ignored and
handled as undefined.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "PreferredName",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    },{
                        name: "ShortName",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    },{
                        name: "Unit",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    },{
                        name: "UnitId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    },{
                        name: "SourceOfDefinition",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    },{
                        name: "Symbol",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    },{
                        name: "DataType",
                        isRequired: false,
                        typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "DataTypeIec61360",
        to: "data-type-iec-61360-v3rc01",
    }
    
                    },{
                        name: "Definition",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    },{
                        name: "ValueFormat",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    },{
                        name: "ValueList",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "ValueList",
        to: "value-list-v3rc01",
    }
    
                    },{
                        name: "Value",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "ValueDataType",
        to: "value-data-type-v3rc01",
    }
    
                    },{
                        name: "ValueId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    },{
                        name: "LevelType",
                        isRequired: false,
                        typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "LevelType",
        to: "level-type-v3rc01",
    }
    
                    }]} /> 
 
