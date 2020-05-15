import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const GroupList = ({ groups }) => (
  <table className="table">
    <thead>
      <tr>
        <th>
          <FormattedMessage id="GroupList.name" />
        </th>
        <th>
          <FormattedMessage id="GroupList.accountNumber" />
        </th>
        <th>
          <FormattedMessage id="GroupList.externalId" />
        </th>
        <th>
          <FormattedMessage id="GroupList.status" />
        </th>
        <th>
          <FormattedMessage id="GroupList.office" />
        </th>
      </tr>
    </thead>
    <tbody>
      {groups.map((group) => {
        return (
          <tr key={group.id}>
            <td>{group.name}</td>
            <td>{group.accountNo}</td>
            <td>{group.externalId}</td>
            <td>{group.status.value}</td>
            <td>{group.officeName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

GroupList.propTypes = {
  groups: PropTypes.array.isRequired
};

export default GroupList;
