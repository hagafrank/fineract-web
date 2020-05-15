import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CenterList from "./CenterList";
import Spinner from "../common/Spinner";
import { FormattedMessage } from "react-intl";
import { loadCenters } from "../../redux/actions/centerActions";

class Centers extends React.Component {
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
      .loadCenters()
      .then(() => this.toggleSpinner(false))
      .catch((error) => {
        this.toggleSpinner(false);
        console.error("Loading centers failed. " + error);
      });
  }

  render() {
    return (
      <>
        <h2>
          <FormattedMessage id="Centers.header" />
        </h2>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <CenterList centers={this.props.centers} />
        )}
      </>
    );
  }
}

Centers.propTypes = {
  centers: PropTypes.array.isRequired,
  loadCenters: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    centers: state.centers.centers || []
  };
}

const mapDispatchToProps = {
  loadCenters
};

export default connect(mapStateToProps, mapDispatchToProps)(Centers);
