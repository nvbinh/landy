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
