# Cypress Web Automation

## Getting Started

### Install Prerequisites

1. Install Node.js dependencies:
   ```bash
   npm install
   ```
2. Install Cypress version 7.7.0:
   ```bash
   npm install --save-dev cypress
   ```

## Running Tests

Navigate to the **Assignment** directory to run the tests.

### Run All Tests
Run the following command to execute all tests:
```bash
npx cypress run --browser chrome
```

### Run a Specific Test
To run a specific test, use:
```bash
npx cypress run --browser chrome --spec "cypress/integration/[FOLDER_NAME]/[SPEC_NAME]"
```

### Run Tests from Cypress Dashboard
1. Open the Cypress dashboard:
   ```bash
   npx cypress open
   ```
2. Select the desired test.
3. Observe how the automated browser interacts with the UI.

## Folder Structure
The project folder structure is documented in [structure.md](/cypress/structure.md).

## Test cases

### 1. Visit the Demo Product

#### First Test Case
**“User tries out the Studio Demo by changing clothes color.”**
- Test file: [clothes-color.spec.js](cypress/integration/demo-product/clothes-color.spec.js)

#### Second Test Case
**“User tries out the Studio Demo by changing clothes pattern.”**
Implement one additional automated test for a scenario of your choice from a quality perspective.
- Test file: [clothes-pattern.spec.js](cypress/integration/demo-product/clothes-pattern.spec.js)

### 2. Visit the Sample Store
**“User tries out the Sample Store by purchasing clothes.”**
- Test file: [clothes-shopping.spec.js](cypress/integration/sample-store/clothes-shopping.spec.js)