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

export interface DirectiveInfo {
   name: string;
   description: string;
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

export interface GuardInfo {
   name: string;
   description: string;
   tsUrl: string;
   tsSource: string;
   inputProps: Array<ComponentProp>;
   outputProps: Array<ComponentProp>;
   props: Array<ComponentProp>;
   methods: Array<ComponentMethod>;
}

export interface InterceptorInfo {
   name: string;
   description: string;
   tsUrl: string;
   tsSource: string;
   inputProps: Array<ComponentProp>;
   outputProps: Array<ComponentProp>;
   props: Array<ComponentProp>;
   methods: Array<ComponentMethod>;
}

export interface ClassInfo {
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
   directives?: Array<DirectiveInfo>;
   interfaces?: Array<InterfaceInfo>;
   guards?: Array<GuardInfo>;
   classes?: Array<ClassInfo>;
   interceptors?: Array<InterceptorInfo>;
}

export interface DocsData {
   projectionContent?: any;
   inputPropsValues?: any;
}
