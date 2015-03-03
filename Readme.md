This project will create an html page, that will create a bubble to call via --

1. Google Hangout
2. Skype

I plan to expand this in the future to support custom / third party VoIP providers.

##### Usage details:

1. Run the code locally using:
..* git clone <<Project URL from Github>>
..* cd motw-calling
..* dev_appserver.py . (If you have Google Cloud tools for Python installed)
..* python -m SimpleHTTPServer 8080 (If you don't have GCE for Python installed)
2. Open your favorite browser and navigate to URL in the following pattern:
```javascript
  http://localhost:8080/?dial_using=<<Dialing Option>>&dial_destination=<<Phone number or Profile ID>>
```
..* Valid values for `Dialing Option` in the above URL are `ghangout` and `skype`
..* Valid values for `Dial Destination` in the above URL are any valid phone number or profile id (Google ID or Skype ID)

**Note:** If dial_using parameter is not specified, `ghangout` will be used as default. `dial_destination` is a mandatory parameter to make calls successfully.
