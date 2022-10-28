import React from "react";
import { render, screen } from "../test-utils";
import Connexion from "../../pages/connexion";

describe('Simple working form', () => {

  it('Should render all form inputs', () => {
    render(
      <Connexion />
    );

    //check for all form fields

    const formInputValues = [
      {
        label: 'formEmail',
        correctTestValue: 'coolguy@gmail.com',
      }, 
      {
        label: 'formPassword',
        correctTestValue: 'ASrty6655#$%f',
      } 
      
    ];
    formInputValues.forEach((value, index) => {
      expect(screen.getByLabelText(value.label)).toBeInTheDocument();
    });
  });

});