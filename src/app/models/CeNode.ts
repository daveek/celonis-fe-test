export type CeNode = {
  value: any;
  type: string;

  expression?: CeNode;
  name?: string;
  left?: CeNode;
  right?: CeNode;
  arguments?: CeNode[];
  // children?: any[];

  // constructor(data: any) {
  //   this.data = data;
  // }
}
