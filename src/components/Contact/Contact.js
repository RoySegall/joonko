import "./contact.scss";
import {useReducer, useState} from 'react';
import {ADD_ERROR, errorsReducer, RESET_ERRORS, valuesReducer} from "./FormReducer";

export default () => {

  const [termsAgree, setTermsAgree] = useState(false);
  const [errors, dispatchError] = useReducer(errorsReducer, {});
  const [formValues, dispatchValue] = useReducer(valuesReducer, {
    companyName: null,
    fullName: null,
    phone: null,
    email: null,
  });

  const handleSubmit = async () => {
    dispatchError({ type: RESET_ERRORS});
    let formValid = true;
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        dispatchError({ type: ADD_ERROR, error: {[key]: 'The field is required'}});
        formValid = false;
      }
    });
    console.log(termsAgree);
    if (!termsAgree) {
      dispatchError({ type: ADD_ERROR, error: {'terms': 'The field is required'}});
      formValid = false;
    }

    if (formValid) {
      console.log('Fire request');
    }
  };

  const {companyNameError, fullNameError, phoneError, emailError, termsError} = errors;
  const FormError = ({children}) => <span className="form-error">{children}</span>
  return <section className="contact">
    <div className="titles">
      <p className="big-title">Want to get the full version?</p>
      <p className="small-title">Fill in the form below:</p>
    </div>

    <div className="form">
      <div className="input-wrapper">
        <input
          placeholder="Full name"
          onChange={(element) => {dispatchValue({element, name: 'fullName'});}}
        />
        {fullNameError && <FormError>{fullNameError}</FormError>}
      </div>


      <div className="input-wrapper">
        <input
          placeholder="Company name"
          onChange={(element) => {dispatchValue({element, name: 'companyName'});}}
        />
        {companyNameError && <FormError>{companyNameError}</FormError>}
      </div>

      <div className="input-wrapper">
        <input
          placeholder="Phone"
          onChange={(element) => {dispatchValue({element, name: 'phone'});}}
        />
        {phoneError && <FormError>{phoneError}</FormError>}
      </div>


      <div className="input-wrapper">
        <input
          placeholder="Work Email"
          onChange={(element) => {dispatchValue({element, name: 'email'});}}
        />
        {emailError && <FormError>{emailError}</FormError>}
      </div>
    </div>

    <div className="actions">
      <a href="#" className="button" onClick={async (e) => {
        e.preventDefault();
        await handleSubmit()
      }}>Download now >></a>
    </div>

    <div className="terms">
      <div className="terms-wrapper">
        <div className={`${termsError ? 'required' : ''}`}>
          <input
            type="checkbox"
            onClick={(e) => {setTermsAgree(e.target.checked);}}
          />
        </div>
      </div>

      <p>I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes.</p>
    </div>

  </section>
}
