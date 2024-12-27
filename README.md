# React Router v6 Nested Route Params Issue

This repository demonstrates a bug encountered when using nested routes and parameters in React Router v6.  The issue results in the nested route parameter not being passed correctly, leading to a blank screen instead of the expected component.

## Bug Description
The provided code utilizes React Router v6 to handle navigation.  When navigating to a nested route with parameters, the parameter value does not propagate down to the nested component. This results in an unexpected blank screen or error.

## Solution
The solution involves carefully handling the route structure and parameter passing using the `useParams` hook provided by React Router v6. This ensures correct parameter retrieval in nested routes.