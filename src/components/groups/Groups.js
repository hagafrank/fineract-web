import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GroupList from "./GroupList";
import Spinner from "../common/Spinner";
import { FormattedMessage } from "react-intl";
import { loadGroups } from "../../redux/actions/groupActions";

class Groups extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };
  }

  toggleSpinner = (show) => {
    this.setState({ loading: show });
  };

  componentDidMount() {
    this.toggleSpinner(true);
    this.props
      .loadGroups()
      .then(() => this.toggleSpinner(false))
      .catch((error) => {
        this.toggleSpinner(false);
        console.error("Loading groups failed. " + error);
      });
  }

  render() {
    return (
      <>
        <h2>
          <FormattedMessage id="Groups.header" />
        </h2>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <GroupList groups={this.props.groups} />
        )}
      </>
    );
  }
}

Groups.propTypes = {
  groups: PropTypes.array.isRequired,
  loadGroups: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    groups: state.groups.groups || []
  };
}

const mapDispatchToProps = {
  loadGroups
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
