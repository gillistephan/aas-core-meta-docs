--- 
id: property-v3rc01 
title: Property 
sidebar_label: Property 
---A property is a data element that has a single value.

<div>
<p>Constraint AASd-007: If both, the Property/value and the Property/valueId are
present then the value of Property/value needs to be identical to the value of
the referenced coded value in Property/valueId.</p>
<p>Constraint AASd-052a: If the semanticId of a Property references a
ConceptDescription then the ConceptDescription/category shall be one of
following values: VALUE, PROPERTY.</p>
<p>Constraint AASd-065: If the semanticId of a Property or MultiLanguageProperty
references a ConceptDescription with the category VALUE then the value of the
property is identical to DataSpecificationIEC61360/value and the valueId of the
property is identical to DataSpecificationIEC61360/valueId.</p>
<p>Constraint AASd-066: If the semanticId of a Property or MultiLanguageProperty
references a ConceptDescription with the category PROPERTY and
DataSpecificationIEC61360/valueList is defined the value and valueId of the
property is identical to one of the value reference pair types references in the
value list, i.e. ValueReferencePairType/value or ValueReferencePairType/valueId,
resp.</p>
</div>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "Extension",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Extension",
        to: "extension-v3rc01",
    }
    
                    }, {
                    name: "IdShort",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                }, {
                        name: "DisplayName",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    }, {
                        name: "Category",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    }, {
                        name: "Description",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    }, {
                        name: "Qualifiers",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Constraint",
        to: "constraint-v3rc01",
    }
    
                    }, {
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
                        name: "Kind",
                        isRequired: false,
                        typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "ModelingKind",
        to: "modeling-kind-v3rc01",
    }
    
                    }, {
                        name: "SemanticId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                    name: "ValueType",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "DataTypeDef",
        to: "data-type-def-v3rc01",
    }
    
                }, {
                        name: "Value",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "ValueDataType",
        to: "value-data-type-v3rc01",
    }
    
                    }, {
                        name: "ValueId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 
