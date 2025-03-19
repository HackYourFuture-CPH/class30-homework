## Generating an API_KEY

You need to generate an API Key at NASA's website!

>> Link to the NASA API: https://api.nasa.gov/

After subscribing, you will receive an email with your API_KEY
Overwrite the `API_KEY` variable with your `API_KEY` from the email. It should look like this:
```
const API_KEY = 'hlcFvEJEPXDr9eUJ7fMHpbsX.....h9V';
```

If you did it successfully, the rover photo should load after reload

## TIPS:

There is a limit per user for this API. You can fetch an API 30 times/hour or 50 times/ day. If you get a `429` error message in the console it is because of this.

You can use another email to get a new `API_KEY` or use the "./mock_data.json" to import the data, but fetch doesn't work with a `.json` file

The `.json` file represents the data only. So it can be used to display the components, but not for the fetch.

### How to use the JSON file:

https://docs.deno.com/examples/importing-json/