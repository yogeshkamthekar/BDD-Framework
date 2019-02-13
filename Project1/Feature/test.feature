@FunctionalTest
Feature: Demo
Description:Purpose to Test various cucumber advance options

#Scenario outline: SampleTest for cucumber practice;

#Given user selects with standard"<username>" and "<password>"

#Examples:
#  | username | password |
#  | test111  | y1234    |

Background: check for each scenario

Given Customer is valid before it access application

@Smoke..
Scenario: Test_smoke

Given Smoke user logs into application and verifies home page screen
When user verifies page
Then home page should be displayed

@Regression
Scenario: Test_Regression

Given Regression user logs into application and verifies home page screen

@Sanity
Scenario: Test_Sanity
Given Sanity user logs into application and verifies home page screen

