import createAPI from '../../shared/utils/createAPI';

const commonUrl = 'formDesignerController';

export default {
  getProcessTypes: () => createAPI.get(`${commonUrl}/getProcessType`),
  getProcessDefinitions: defKey => createAPI.get(`${commonUrl}/getProcessDefinitions`, { defKey }),
  getAllTaskFormProperties: processDefinitionId =>
    createAPI.get(`${commonUrl}/getAllTaskFormProperties`, {
      processDefinitionId,
    }),
  saveFormExtend: formExtend => createAPI.post(`${commonUrl}/saveFormExtend`, formExtend),
};
