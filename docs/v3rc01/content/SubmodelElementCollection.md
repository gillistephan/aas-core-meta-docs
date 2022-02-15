--- 
id: submodel-element-collection-v3rc01 
title: SubmodelElementCollection 
sidebar_label: SubmodelElementCollection 
---A submodel element collection is a set or list of submodel elements.

<div>
<p>Constraint AASd-059: If the semanticId of a SubmodelElementCollection references a
ConceptDescription then the category of the ConceptDescription shall be COLLECTION
or ENTITY.</p>
<p>Constraint AASd-092: If the semanticId of a SubmodelElementCollection with
SubmodelElementCollection/allowDuplicates == false references a ConceptDescription
then the ConceptDescription/category shall be ENTITY.</p>
<p>Constraint AASd-093: If the semanticId of a SubmodelElementCollection with
SubmodelElementCollection/allowDuplicates == true references a ConceptDescription
then the ConceptDescription/category shall be COLLECTION.</p>
<p>Example: A set of documents is referencing a concept description of category
COLLECTION. A document within this collection is described as
a SubmodelElementCollection referencing a concept description of category ENTITY.</p>
<p>This means that no generic semanticId can be assigned to an element within
a submodel element collection with allowDuplicates == false: every element within
the entity needs a clear and unique semantics.</p>
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
                        name: "Values",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "SubmodelElement",
        to: "submodel-element-v3rc01",
    }
    
                    }, {
                        name: "Ordered",
                        isRequired: false,
                        typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.BOOL",
        to: null,
    }
    
                    }, {
                        name: "AllowDuplicates",
                        isRequired: false,
                        typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.BOOL",
        to: null,
    }
    
                    }]} /> 
 