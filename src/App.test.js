import { render, fireEvent, getByLabelText, getByPlaceholderText, getByDisplayValue } from '@testing-library/react';
import App from './App';
import nock from 'nock';
import React from 'react';


  it('displays user data', async () => {

  
    var {getByTestId, findByTestId} = render(<App />)

    expect(await findByTestId("submit")).toHaveTextContent('Click! to fetch all public repos');
  })
