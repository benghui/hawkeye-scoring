import React from "react";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    var that = this;
    $.ajaxSetup({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") }
    });
    $.ajax({
      type: "DELETE",
      url: "http://localhost:3000/users",
      dataType: "json",
      data: { user: { email: that.props.currentUser } },
      error: function(error) {
        that.props.updateDeleteError();
      },
      success: function(res) {
        that.props.changePage("login");
      }
    });
  }

  render() {
    return <button onClick={this.handleDelete}>Delete Account</button>;
  }
}

export default Delete;
