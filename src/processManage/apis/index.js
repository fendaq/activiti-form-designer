import createAPI from '../../shared/utils/createAPI';

export default {
  getModels: (rowSize = 10, page = 1) => createAPI.get('models', { rowSize, page }),
  deleteModel: id => createAPI.delete(`models/${id}`),
  createModel: () => createAPI.post('models/newModel'),
  deployModel: id => createAPI.post(`models/${id}/deployment`, { id }),
  getDeploys: (rowSize = 10, page = 1) => createAPI.get('deployments', { rowSize, page }),
  deleteDeploy: id => createAPI.delete(`deployments/${id}`, { id }),
};
