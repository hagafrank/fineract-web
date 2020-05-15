import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const CenterList = ({ centers }) => (
  <table className="table">
    <thead>
      <tr>
        <th>
          <FormattedMessage id="CenterList.name" />
        </th>
        <th>
          <FormattedMessage id="CenterList.accountNumber" />
        </th>
        <th>
          <FormattedMessage id="CenterList.externalId" />
        </th>
        <th>
          <FormattedMessage id="CenterList.status" />
        </th>
        <th>
          <FormattedMessage id="CenterList.office" />
        </th>
      </tr>
    </thead>
    <tbody>
      {centers.map((center) => {
        return (
          <tr key={center.id}>
            <td>{center.name}</td>
            <td>{center.accountNo}</td>
            <td>{center.externalId}</td>
            <td>{center.status.value}</td>
            <td>{center.officeName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CenterList.propTypes = {
  centers: PropTypes.array.isRequired
};

export default CenterList;
