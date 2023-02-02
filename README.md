# Task 1 - Implementation

The task in this challenge is to build an advanced calculator. The calculator should be able to take input in the form of a free text formula and then visualize the evaluation tree with the ultimate goal of executing the formula.

## Description of the language
The language which we want to execute is fairly simple as it is oriented at the excel syntax.

The language is built using the following rules (note that those are not formally correct but just an illustration):

```
EXPR = BINARY_EXPR 
    | FUNCTION 
    | UNARY_EXPR 
    | NUMBER 
    | STRING 
    | PARAMETER
    | PI
    | "(" EXPR ")"

BINARY_EXPR = EXPR + EXPR 
    | EXPR - EXPR 
    | EXPR * EXPR
    | EXPR / EXPR

FUNCTION = <FunctionName>"(" (EXPR ("," EXPR)*)? ")"

UNARY_EXPR = "-" EXPR

NUMBER = [Float or Integer Number]

STRING = "'"[String]"'"

PARAMETER = "$"[PARAMETER_NAME]

PI = "PI"

```

The following examples are valid queries

```
PI * SQR($r)

($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)


```

Based on this, the following questions should be answered and tasks implemented:

### 1) Analyze formula

In order to eventually execute a formula, we need to analyze it and generate a model describing the different operations. Please describe the steps and software components you would need to implement in order to analyze a formula. Please also describe, what kind of data structure you would use as a result of the analysis and why you would choose this data structure.

Note that you do not have to implement your proposed solution.

### 2) Visualizing the formula

Data visualization is one of the key aspects of Celonis' Software Products. In this task you should implement an interactive visualization of the formula entered.

As a starting point, in the src/ folder you can find a parser as well as AST classes and a small function library implemented for demostration purposes.

#### Tasks
1) Describe the architecture and component structure you are planning to use in order to visualize the formula hierarchy. Note that also adding and deleting nodes should be considered here (see examples below).
2) Generate a formula string from the tree. (Visualized Syntax Tree => Formula)
3) Visualize a syntax tree / parse tree in a component. It should be easy for the user to distinguish between functions, constants etc. (Formula => Visualized Syntax Tree)
4) Allow deletion of nodes from the tree
5) Allow adding nodes to the tree


#### Examples

Someone has entered the following formula for calculating the area of a circle: `PI * SQR(4)` for a circle with a radius of `4`.

Now the user wants to change the static value `4` to a parameter `$r`. However, instead of editing it in the formula directly, it should be possible to do this visually as the user is not familiar with the language.

Examples of how it could work:

- Adding a block to the formula

![Alt text](./assets/Challenge_AddBlock.png?raw=true "Click to select and x button to remove")

- Removing a block from the formula(click to select, x button to remove)

![Alt text](./assets/Challenge_EditBlock.png?raw=true "Click to select and x button to remove")

- Changing the type of a block

![Alt text](./assets/Challenge_ChangingValueType.png?raw=true "Change the type")

Please describe the components which you want to create in order to do the flexible rendering of the tree, describe how you implement the interactions and how you implement the to-string-conversion of the formula.

There are some test cases there which you can use as a reference or extend.

# Hints on running the scaffolded code

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
