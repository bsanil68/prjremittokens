import React, { useState, useEffect } from 'react';
import { Form, FormGroup, ControlLabel, Input, InputPicker } from 'rsuite';

function ApprovePayLoadForm() {
  const [customerData, setCustomerData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const [addressOptions, setAddressOptions] = useState([]); // List of address options

  useEffect(() => {
    // Define the URL of the API endpoint you want to fetch customer data from
    const customerApiUrl = 'https://example.com/api/customer';
    // Define the URL of the API endpoint for fetching addresses
    const addressApiUrl = 'https://example.com/api/addresses';

    // Make a GET request to the customer API to fetch customer data
    fetch(customerApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response has properties 'name', 'address', and 'email'
        const { name, address, email } = data;

        // Update the component state with the fetched customer data
        setCustomerData({ name, address, email });
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
      });

    // Make a GET request to the address API to fetch address options
    fetch(addressApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of address objects
        setAddressOptions(data);
      })
      .catch((error) => {
        console.error('Error fetching address data:', error);
      });
  }, []); // The empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Customer Information</h1>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Name:</ControlLabel>
          <Input name="name" value={customerData.name} readOnly />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email:</ControlLabel>
          <Input name="email" value={customerData.email} readOnly />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Address:</ControlLabel>
          <InputPicker
            name="address"
            data={addressOptions}
            value={customerData.address}
            disabled // Disable the InputPicker since address is read-only
            labelKey="address" // Set the label key for the address data
            valueKey="id" // Set the value key for the address data
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default ApprovePayLoadForm;
