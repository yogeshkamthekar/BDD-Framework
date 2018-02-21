/*package cucumberReport;
fdfdd
import org.testng.annotations.AfterMethod;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import objectRepository.dataPass;
import cucumber.runtime.Utils;
import org.openqa.selenium.WebDriver;

public class cucumberReport implements dataPass  {

	Scenario scenario;
	public static WebDriver driver = null;
	@Before({"@Nirvana"})
	public void beforeCucumberscenario() throws Exception{
	System.out.println("start of test for'Nirvana' module");
		}
	
	@Given("^Customer is valid before it access application$")
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
	
	@After({"@Nirvana"})
	 public void aftertest(Scenario scenario) {
	 if (scenario.isFailed()) {	
	 scenario.write("test for embedding text in Report");	
	 scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
	  }
	 driver.close();
	 driver.quit();
	 
	}
}
*/