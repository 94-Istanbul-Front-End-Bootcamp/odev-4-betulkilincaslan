import React from "react";
import { Button } from "reactstrap";

export default function SubmitButton(props) {
  const { onClickHandler } = props;
  return (
    <div>
      <Button
        onClick={onClickHandler}
        type="submit"
        color="info"
        className="w-100"
      >
        Add Comment
      </Button>
    </div>
  );
}
