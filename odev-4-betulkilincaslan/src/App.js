import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import SubmitButton from "../src/Components/SubmitButton";
import AddVote from "./Components/AddVote";
import AddComment from "./Components/AddComment";
import ListComment from "../src/Components/ListComment";
import "./App.css";

export default class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };

  onCommentChange = (event) => {
    this.setState({ commentValue: event.target.value });
  };

  onVoteChange = (newRating) => {
    this.setState({ vote: newRating });
  };

  onClickHandler = () => {
    const newState = this.state;
    console.log(!this.state.vote === 0 && this.state.commentValue.length > 3);
    if (this.state.vote !== 0 && this.state.commentValue.length > 3) {
      console.log("if e girdi");
      newState.comments.push({
        id: Math.random(),
        text: this.state.commentValue,
        vote: this.state.vote,
      });
      newState.commentValue = "";
      newState.vote = 0;

      this.setState({
        ...newState,
      });

      console.log(this.state);
    } else {
      if (this.state.vote === 0 && this.state.commentValue.length <= 3) {
        alert(" Oy verin ve 3 karakterden fazla yorum yapın ");
      } else {
        if (this.state.vote === 0) {
          alert("Oy verin");
        }
        if (this.state.commentValue.length <= 3) {
          alert("3 karakterden fazla yorum please");
        }
      }
    }
  };

  render() {
    return (
      <div>
        <Container className="mt-4">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <ListComment
                comments={this.state.comments}
                commentValue={this.state.commentValue}
                vote={this.state.vote}
              />
              <AddComment
                commentValue={this.state.commentValue}
                onCommentChange={this.onCommentChange}
              />
              <AddVote
                onVoteChange={this.onVoteChange}
                vote={this.state.vote}
              />
              <SubmitButton onClickHandler={this.onClickHandler} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
