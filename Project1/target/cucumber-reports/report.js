$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 2,
  "name": "Demo",
  "description": "Description:Purpose to Test various cucumber advance options",
  "id": "demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 1257380,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario outline: SampleTest for cucumber practice"
    },
    {
      "line": 7,
      "value": "#Given user selects with standard\"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 9,
      "value": "#Examples:"
    },
    {
      "line": 10,
      "value": "#  | username | password |"
    },
    {
      "line": 11,
      "value": "#  | test111  | y1234    |"
    }
  ],
  "line": 13,
  "name": "check for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "Customer is valid before it access application",
  "keyword": "Given "
});
formatter.match({
  "location": "test.background_test_scenario()"
});
formatter.result({
  "duration": 523121448,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test_smoke",
  "description": "",
  "id": "demo;test-smoke",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Smoke user logs into application and verifies home page screen",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user verifies page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "test.smoke_test()"
});
formatter.result({
  "duration": 83791,
  "status": "passed"
});
formatter.match({
  "location": "test.smoke_test1()"
});
formatter.result({
  "duration": 358297,
  "status": "passed"
});
formatter.match({
  "location": "test.smoke_test2()"
});
formatter.result({
  "duration": 82249,
  "status": "passed"
});
formatter.after({
  "duration": 223100,
  "status": "passed"
});
formatter.before({
  "duration": 106410,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario outline: SampleTest for cucumber practice"
    },
    {
      "line": 7,
      "value": "#Given user selects with standard\"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 9,
      "value": "#Examples:"
    },
    {
      "line": 10,
      "value": "#  | username | password |"
    },
    {
      "line": 11,
      "value": "#  | test111  | y1234    |"
    }
  ],
  "line": 13,
  "name": "check for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "Customer is valid before it access application",
  "keyword": "Given "
});
formatter.match({
  "location": "test.background_test_scenario()"
});
formatter.result({
  "duration": 1295934,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Test_Regression",
  "description": "",
  "id": "demo;test-regression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Regression user logs into application and verifies home page screen",
  "keyword": "Given "
});
formatter.match({
  "location": "test.regression_test()"
});
formatter.result({
  "duration": 1507725,
  "status": "passed"
});
formatter.after({
  "duration": 450313,
  "status": "passed"
});
formatter.before({
  "duration": 409702,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario outline: SampleTest for cucumber practice"
    },
    {
      "line": 7,
      "value": "#Given user selects with standard\"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 9,
      "value": "#Examples:"
    },
    {
      "line": 10,
      "value": "#  | username | password |"
    },
    {
      "line": 11,
      "value": "#  | test111  | y1234    |"
    }
  ],
  "line": 13,
  "name": "check for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "Customer is valid before it access application",
  "keyword": "Given "
});
formatter.match({
  "location": "test.background_test_scenario()"
});
formatter.result({
  "duration": 398393,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test_Sanity",
  "description": "",
  "id": "demo;test-sanity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Sanity user logs into application and verifies home page screen",
  "keyword": "Given "
});
formatter.match({
  "location": "test.sanity_test()"
});
formatter.result({
  "duration": 433349,
  "status": "passed"
});
formatter.after({
  "duration": 1125782,
  "status": "passed"
});
});