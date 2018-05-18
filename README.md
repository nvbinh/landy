# landy

### Branch Naming Convention:
- structure/client - Build structure code, configuration
- feature/latestnew - Build the new feature
- bug/homebroken - Fix a bug

### Auto Migrate Database
npm install --save loopback-component-auto-migrate
https://www.npmjs.com/package/loopback-component-auto-migrate


### Reference
https://medium.freecodecamp.org/build-restful-api-with-authentication-under-5-minutes-using-loopback-by-expressjs-no-programming-31231b8472ca
https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained

Config environment: Staging, production, development
https://loopback.io/doc/en/lb2/Environment-specific-configuration.html

No expose explorer on production
https://loopback.io/doc/en/lb2/Environment-specific-configuration.html

Expose or disable the API in explorer
https://loopback.io/doc/en/lb2/Exposing-models-over-REST.html​

Create relations between tables
https://loopback.io/doc/en/lb2/Define-model-relations.html#define-relations

Get News with Category Name (relation between News and Category tables)
https://stackoverflow.com/questions/30560735/getting-joined-data-from-strongloop-loopback
http://localhost:3000/explorer/#!/News/News_findById
params:
{"include":"category"}

Customize a model using JSON
https://loopback.io/doc/en/lb2/Customizing-models.html

plural - set to a custom string value to use, instead of the default standard plural form.
strict - set to true to make the model save only instances that have the predefined set of properties. Any additional properties in a save or update operation are not persisted to the data source. False by default.
idInjection - Whether to automatically add an id property to the model. True by default.
http.path - customized HTTP path of REST endpoints.

Upload file to server
https://loopback.io/doc/en/lb3/Storage-component.html#example