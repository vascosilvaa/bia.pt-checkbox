
# Checkbox bia.pt

A simple and reusable checkbox made with React. 


## Instalation
The package can be installed via NPM:

	npm install @bia.pt/checkbox --save

## Configuration
The most basic use of the Checkbox can be described with:

	<Checkbox label="example checkbox" checked={bool} onChange={this.handleChange} />

## Props
List of the props and types that can  be used:

 - **label**: *string* - text of the checkbox;
 - **checked**: *boolean* - state of the checkbox (true/false);
 - **onChange**: *function* - what happens when user click on the checkbox;

## Import
Simple import of the package:

	import Checkbox from '@bia.pt/checkbox'

### Dependencies
List of dependencies that you may have to install:

 - **css-loader**: *^0.28.11* 
 - **prop-types**: *^15.6.1* 
 - **style-loader**: *^0.21.0* 
 - **webpack**: *^2.7.0* 
