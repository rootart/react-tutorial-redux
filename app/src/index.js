import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

import { Field, reduxForm } from 'redux-form'



import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// create form component

let ContactForm = props => {
    const { handleSubmit } = props
    return (
      <form onSubmit={ handleSubmit }>
              <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
      </form>
    )
  }

ContactForm = reduxForm({
// a unique name for the form
    form: 'contact'
})(ContactForm)


ReactDOM.render(
    <Provider store={store}>
        <ContactForm onSubmit={()=>(console.log('test'))}/>
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
