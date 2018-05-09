### withrouter
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md#withrouter

### connect in redux
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md
The component is connected to redux via connect()(Comp)

### createStore, reducer, enhancer
https://redux.js.org/api-reference/createstore#createstorereducer-preloadedstate-enhancer

### Form Validation
https://github.com/lonelyplanet/react-validate-form

### JSX Code Syntax
- Write attributes in a new line instead of one line for the element
+ Should:
  ```
  <Control.text
    model=".lastName"
    id="userinfo.lastName"
    className="form-control"
    placeholder="Enter password" />
  ```
+ Shouldn't
  ```
  <Control.text model=".lastName" id="userinfo.lastName" className="form-control" placeholder="Enter password" />
  ```