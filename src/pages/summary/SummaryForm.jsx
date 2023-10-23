import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No Ice cream will be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agrre to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms">
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
