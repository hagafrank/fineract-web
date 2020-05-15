import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClientList from "./ClientList";
import Spinner from "../common/Spinner";
import { FormattedMessage } from "react-intl";
import { loadClients } from "../../redux/actions/clientActions";

class Clients extends React.Component {
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
      .loadClients()
      .then(() => this.toggleSpinner(false))
      .catch((error) => {
        this.toggleSpinner(false);
        console.error("Loading clients failed. " + error);
      });
  }

  render() {
    return (
      <>
        <h2>
          <FormattedMessage id="Clients.header" />
        </h2>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ClientList clients={this.props.clients} />
        )}
      </>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.array.isRequired,
  loadClients: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    clients: state.clients.clients || []
  };
}

const mapDispatchToProps = {
  loadClients
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
