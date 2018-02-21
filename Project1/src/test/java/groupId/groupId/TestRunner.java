package groupId.groupId;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
 features = "Feature"
 ,glue= {"test_Scenarios"},tags= {"@Smoke,@Regression,@Sanity"},
		 plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
					"junit:target/cucumber-reports/Cucumber.xml",
					"html:target/cucumber-reports"},
 monochrome = true)
// plugin = { "com.cucumber.listener.ExtentCucumberFormatter:report.html"},
// monochrome = true)

public class TestRunner {
	@AfterClass
	public static void writeExtentReport() {
//		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
	}
}
