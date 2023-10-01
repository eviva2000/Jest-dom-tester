import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  const checkboxLabel = (
    <span>
      I agrre to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group contrilId="terms">
        <Form.Check
          type="checkbox"
          label={checkboxLabel}
          onChange={(e) => setDisabled(!e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submite" disabled={disabled}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
