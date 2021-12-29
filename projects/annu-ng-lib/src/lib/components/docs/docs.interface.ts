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

export class ComponentInfo {
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
