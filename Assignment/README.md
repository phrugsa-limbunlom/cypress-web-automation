# cypress-automation-assigment

## CYPRESS AUTOMATION ASSIGNMENT

### Install prerequisite

1. install node `npm install`
2. install cypress version 7.7.0 `npm install --save-dev cypress`

### How to run test

1.Run all test

- run command `npx cypress run --browser chrome`

2.Run specific test

- run command `npx cypress run --browser chrome --spec "cypress/integration/[FOLDER_NAME]/[SPEC_NAME]"`

3.Run specific test from cypress dashboard

- run command `npx cypress run --browser chrome`
- select the test
- see how automate browser interact with UI

### Folder structure

- [strucutre.md](/cypress/structure.md)

### Tasks

1. Visit our Demo Product

    - First Tes caset: Implement automation test in the scenario below **“User try out the Studio Demo by changing clothes color”**
        
        [clothes\-color.spec.js](cypress/integration/demo-product/clothes-color.spec.js)
        
    - Second Test case: Implement one automation test in any scenarios from your quality perspective
       
       [clothes\-pattern.spec.js](cypress/integration/demo-product/clothes-pattern.spec.js)
        
2. Visit Sample Store: Implement one automation test on any feature on Sample Store 
   - [clothes\-shopping.spec.js](cypress/integration/sample-store/clothes-shopping.spec.js)




