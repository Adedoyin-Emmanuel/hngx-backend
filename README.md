# HNGX Backend Assignment Stage 1

## Objective 🎯

Create and host an endpoint using any programming language of your choice.
The endpoint should take two GET request query parameters and return specific information in JSON format.

## Requirements 📚

The information required includes Slack name
Current day of the week Current UTC (with validation of +/-2)
Track
The GitHub URL of the file being run
The GitHub URL of the full source code.
A Status Code of Success

```json
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}
```

## Acceptance Criteria ✍️

1. **Endpoint Creation**: Provide a publicly accessible endpoint.
2. **GET Parameters**: The endpoint should accept two GET request query parameters: slack_name and track.
   E.g.: http://example.com/api?slack_name=example_name&track=backend.
3. **Slack Name**: The response should include the slack_name passed as a GET request query parameter.
4. **Current Day of the Week**: Display the current day of the week in full (e.g., Monday, Tuesday, etc.).
5. **Current UTC Time**: Return the current UTC, accurate within a +/-2 minute window.
   Track: The response should display the track of the you signed up for (Backend). This will be based on the track GET parameter passed to the endpoint.
6. **GitHub File URL**: Include a direct link to the specific file in the GitHub repository that's being executed.
7. **GitHub Repo URL**: Include a link to the main page of the GitHub repository containing the project's entire source code.
8. **Status Code**: Return 200 as Integer.
9. **JSON Format**: The endpoint's response should adhere to the specified JSON format.
   Testing: Before submission:
   Ensure the endpoint is accessible.
   Check the returned JSON against the defined format.
   Validate the correctness of each data point in the JSON response.
   Submission Mode
   Please follow these submission guidelines
   Get into your DM

10. **Type /grade** <your-api-endpoint-url-with-the-query-parameters>
    E.g: /grade http://example.com/api?slack_name=example_name&track=backend
    Check your result
    Very Important.....
    Finally, please use the provided Google Form. Within the form, share the URL of your hosted endpoint, along with the GitHub repository link of the file being run, and where the full source code can be found.

## Warning ⚠️

Before submitting, do a final check with the grader bot to ensure that your endpoint is operational and meets the specified requirements. Incomplete or non-functional submissions may affect your evaluation.

## Submission Deadline ⌛

The deadline for submissions is 12th September 2023, 11:59 PM GMT + 1.
Late submissions will not be entertained.
If you encounter any issues or have questions regarding the task or the submission process, please message any backend mentor.
Best of luck!
