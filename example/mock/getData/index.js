const getProcessType = require('./getProcessType.js');
const getProcessDefinitions = require('./getProcessDefinitions.js');
const getAllTaskFormProperties = require('./getAllTaskFormProperties.js');
const getRadioItems = require('./getRadioItems.js');
const getCheckboxItems = require('./getCheckboxItems.js');
const models = require('./getModuleList.js');
const deployments = require('./getDeployList.js');
const deleteModel = require('./deleteModel.js');

module.exports = {
  getProcessType,
  getProcessDefinitions,
  getAllTaskFormProperties,
  getRadioItems,
  getCheckboxItems,
  models,
  deployments,
  deleteModel,
};
