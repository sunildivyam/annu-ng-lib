export interface ComponentProp {
   name: string;
   type: string;
   defaultValue?: string;
   deprecated?: boolean;
   deprecationMessage?: string;
   description?: string;
   accessModifier?: string;
}

export interface ComponentMethod {
   name: string;
   returnType: string;
   args?: Array<any>;
   deprecated?: boolean;
   deprecationMessage?: string;
   description?: string;
   accessModifier?: string;
}

export interface ComponentInfo {
   name: string;
   description: string;
   selector: string;
   styleUrl: string;
   styleSource: string;
   templateUrl: string;
   templateSource: string;
   tsUrl: string;
   tsSource: string;
   inputProps: Array<ComponentProp>;
   outputProps: Array<ComponentProp>;
   props: Array<ComponentProp>;
   methods: Array<ComponentMethod>;
}

export interface ServiceInfo {
   name: string;
   description: string;
   tsUrl: string;
   tsSource: string;
   inputProps: Array<ComponentProp>;
   outputProps: Array<ComponentProp>;
   props: Array<ComponentProp>;
   methods: Array<ComponentMethod>;
}

export interface InterfaceInfo {
   name: string;
   description: string;
   tsUrl: string;
   tsSource: string;
}

export interface GuardsInfo {
   name: string;
   description: string;
   tsUrl: string;
   tsSource: string;
   inputProps: Array<ComponentProp>;
   outputProps: Array<ComponentProp>;
   props: Array<ComponentProp>;
   methods: Array<ComponentMethod>;
}

export interface LibDocsInfo {
   components?: Array<ComponentInfo>;
   services?: Array<ServiceInfo>;
   interfaces?: Array<InterfaceInfo>;
   guards?: Array<GuardsInfo>;
}

export interface DocsData {
   projectionContent?: any;
   inputPropsValues?: any;
}
