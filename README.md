
# FriendFinder

## Overview
In this repository I created a "FriendFinder" application using Node modules such as Express and Path. This full-stack site will take in results from a users' survey, compare the answers of previous users and return the user that is an overall match.

## Capabilities
* The application has the following capabilities:
    1. Home Page
        1. Button to route user to Survey Page
        2. API Friend List hyperlink that displays all of the submissions on the server in an Object format
    2. Survey Page
        1. Form that allows user to enter name and paste a hyperlink of their image
        2. Dropdowns that allow the user to select their answers
        3. Logic that returns their most compatible friend


## Components
* NPM Packages
  1. path
  2. express
* JQuery
* Bootstrap

## Examples

1. Home Page
    1. Home page will allow user to be routed to Survey page or view all friend submissions via hyperlink

![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/49562826-fa89fa80-f8d1-11e8-80d1-d0dec4f02769.png)


2. Survey Page
    1. User is able to complete template for details about themselves
    2. System will return the most compatible friend after they click 'Submit'


```
How Friends are determined: 
Each user's results are converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, the difference between the current user's scores are compared against those from other submissions, question by question. The differences are then tallied for the user versus the others.


Example: 
User Input: [1, 1 ,1]

Other 1: [5, 1, 4]

Other 2: [3, 2, 1]

Total Difference Between Other 1 and Input: [4 + 0 + 3] = 7
Total Difference Between Other 2 and Input: [2 + 1 + 0] = 3 <-- this user will be selected to be the 'friend' of the user
```


![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/49562827-fa89fa80-f8d1-11e8-876a-a7dbff8858e6.png)
