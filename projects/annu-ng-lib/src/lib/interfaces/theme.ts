export interface Theme {
  name: string;
  description: string;
  vars: {
    accent: string;
    background: string;
    mainHue: string;
  };
}
