# Optimizer using the simplex method for CMSC 150

A web app that allows users to minimize or maximize functions either explicitly or through the Diet Optimizer feature.

## Plain optimizer

Provides an area to place functions in a linear programming problem that users can maximize or minimize.

The equations are in the form of

    A * x1 * B * x2 * C * D * x3 + E

When maximizing, all of the equations with surpluses are negated while when minimizing, both the objective function and the slacks are negated.
After solving, the application will output the tableu of each iteration along with its basic solution.

## Diet optimizer

Given an array of 64 food items, users can select any number of food and have the application crunch the optimum food combination with the lowest cost that retains its nutrition quality. The application will output each food along with its recommended serving and projected price. 
