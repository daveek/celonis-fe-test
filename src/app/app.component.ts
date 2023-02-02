import { Component } from '@angular/core';
import { CeNode } from './models/CeNode.js';

// @ts-ignore
import * as Parser from './parser/formula-parser.js';
const parse = Parser.parse;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current!: CeNode;
  componentsData: Array<CeNode> = [];

  formula: string = "($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)";
  visualizerOutput: string = "";
  syntaxTree: any;
  syntaxTreeJson: string = "";

  updateAstView() {
    console.log('creating ast view...');
    this.syntaxTree = parse(this.formula);
    console.log('The ast is: ', this.syntaxTree);
    this.syntaxTreeJson = JSON.stringify(this.syntaxTree, null, 2);
  }

  convertAstToFormula() {
    console.log('converting ast to string...');
    this.visualizerOutput = "TO BE IMPLEMENTED";
    this.degreggateTree(this.syntaxTree);

    this.componentsData.forEach((it: CeNode) => {
      if (it.type === 'ADDITION' || it.type === 'SUBTRACTION'
        || it.type === 'MULTIPLICATION' || it.type === 'DIVISION') {
          // TODO assign the Node to the Basic Component
        }
    });

  }


  /*** Here I'd like to create a recursive   ***/
  /*** method to traverse the Tree and assign each type of Node ***/
  /*** the correspondent component ***/
  degreggateTree(syntaxTree: any): CeNode {
    syntaxTree as CeNode;

    console.debug(syntaxTree.type);
    this.componentsData.push(syntaxTree);

    if (syntaxTree.expression) {
        console.warn(syntaxTree.expression)
        this.degreggateTree(syntaxTree.expression);
    }
    if (syntaxTree.left) {
      const left = syntaxTree.left;
      console.warn(left);
      this.degreggateTree(left);
    }
    if (syntaxTree.right) {
      const right = syntaxTree.right;
      console.warn(right);
      this.degreggateTree(right);
    }
    if (syntaxTree.arguments) {
      syntaxTree.arguments.forEach((ele: CeNode) => {
        console.warn(ele);
        this.degreggateTree(ele);
      });
    }

    return syntaxTree;
  }

}
