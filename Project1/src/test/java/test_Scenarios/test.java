package test_Scenarios;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class test {

Scenario scenario;

@Before(order=0)
public void beforeCucumberScenario() throws Exception{
	System.out.println("Start of Test for Test_Sanity module");
}

//Background test which would execute at each step
@Given("^Customer is valid before it access application$")
public void background_test_scenario() throws Throwable
{
System.out.println("background test for each scenario would be executed");
}
//Smoke user logs into application and verifies home page screen
@Given("^Smoke user logs into application and verifies home page screen$")
public void smoke_test() throws Throwable
{
System.out.println("smoke test is successful");	
}

@When("^user verifies page$")
public void smoke_test1() throws Throwable
{
System.out.println("smoke test is successful for when condition");	
}

@Then("^home page should be displayed$")
public void smoke_test2() throws Throwable
{
System.out.println("smoke test is successful for then condition");	
}

@Given("^Regression user logs into application and verifies home page screen$")
public void regression_test() throws Throwable
{
System.out.println("Regression test is successful");	
}

@Given("^Sanity user logs into application and verifies home page screen$")
public void sanity_test() throws Throwable
{
System.out.println("sanity test is successful");	
}


@Given("^user selects with standard ([^\"]*) and ([^\\\"]*)$")
public void test_with_parameterization() throws Throwable
{
System.out.println("sanity test is successful");	
}

@After
public void test_after() throws Exception{
	System.out.println("End of Test for Test_Sanity module");	
}
}