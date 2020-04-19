function capitalizeOnlyFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function hashedSeverityTestStatus(severity, testStatus) {
  return `${severity}.${testStatus}`.toLowerCase();
}

module.exports = {
  capitalizeOnlyFirst,
  hashedSeverityTestStatus,
};
