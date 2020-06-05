import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first Name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const button = screen.getByText('Checkout')
    

    fireEvent.change(firstNameInput, { target: { value: 'Jonathan' } })
    fireEvent.change(lastNameInput, { target: { value: 'Thornton' } })
    fireEvent.change(addressInput, { target: { value: '111 someroad' } })
    fireEvent.change(cityInput, { target: { value: 'Eugene' } })
    fireEvent.change(stateInput, { target: { value: 'Oregon' } })
    fireEvent.change(zipInput, { target: { value: '97404' } })
   
    fireEvent.click(button)
    
    const success =  screen.getByTestId(/successMessage/)
    
    expect(success).toBeInTheDocument()
    
});
