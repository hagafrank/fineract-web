import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const ClientList = ({ clients }) => (
  <table className="table">
    <thead>
      <tr>
        <th>
          <FormattedMessage id="ClientList.name" />
        </th>
        <th>
          <FormattedMessage id="ClientList.clientNumber" />
        </th>
        <th>
          <FormattedMessage id="ClientList.externalId" />
        </th>
        <th>
          <FormattedMessage id="ClientList.status" />
        </th>
        <th>
          <FormattedMessage id="ClientList.office" />
        </th>
        <th>
          <FormattedMessage id="ClientList.staff" />
        </th>
      </tr>
    </thead>
    <tbody>
      {clients.map((client) => {
        return (
          <tr key={client.id}>
            <td>{client.displayName}</td>
            <td>{client.accountNo}</td>
            <td>{client.externalId}</td>
            <td>{client.status.value}</td>
            <td>{client.officeName}</td>
            <td>{client.staffName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ClientList.propTypes = {
  clients: PropTypes.array.isRequired
};

export default ClientList;
