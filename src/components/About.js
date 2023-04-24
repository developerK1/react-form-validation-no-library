import React from 'react'

const About = () => {
  return (
    <section id="about">
      <figure>
        <article className='details'>
        <aside>
          <h3>Form Validation</h3>
          <p>This is a form input validation example , a way to the process, confirm or verifying the accuracy or correctness of the user input</p>
          <p>That is developed by React Js library as a front end from validations. No third party library or frampwork used, just react hook. The "useState" and "useEffect"</p>
          <ol>
            <li>Run "npm install"</li>
            <li>Npm start</li>
            <li>Wala, open any web browser you prefer or like the hit up a url "localhost:30000"</li>
          </ol>
        </aside>
        <aside>
          <h3>FOR EDITING USE</h3>
          <p>You May Use This Sample however you choose to</p>
          <h5>Add another form field</h5>
          <p className='note-bene'>#Make use the field has the following <span className='qoutes'>attributes :-</span></p>
          <ol>
            <li> A placeholder </li>
            <li>A value</li>
            <li>A name attribute</li>
            <li> An onChange which is binded to "handleChange" or edit your own</li>
            <li>A paragraph tag with its a binded to it's name attribute for Error object</li>
          </ol>
        </aside>
      </article>
      <article className='function-details'>
        <aside>
          <h3>The "defaultValues function"</h3>
          <p>Assign your value to an empty string</p>
        </aside>
        <aside>
          <h3>The "checkValues function"</h3>
          <p>Add your validations logic</p>
        </aside>
        <aside>
          <h3>Evoke checkValues(a, b)</h3>
          <p>Where "a" is formValues.YourInputName</p>
          <p>Where "b" is YourInputName in form of a string</p>
        </aside>
        <aside>
          <h3>TEST TEST TEST!</h3>
          <p>Then you are set</p>
        </aside>
      </article>
      </figure>
    </section>
  )
}

export default About