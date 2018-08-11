import Layout from './layout';
import FormDesignerPage from './pages/formDesigner';
import FormApplyPage from './pages/formApply';
import FormViewerPage from './pages/formViewer';
import WorkflowPage from './pages/workflow';
import processManagePage from './pages/processManage';

const routes = [
  {
    component: Layout,
    routes: [
      {
        component: FormDesignerPage,
        path: '/',
        exact: true,
      },
      {
        component: FormDesignerPage,
        path: '/form-designer',
      },
      {
        component: FormApplyPage,
        path: '/form-apply',
      },
      {
        component: FormViewerPage,
        path: '/form-viewer',
      },
      {
        component: WorkflowPage,
        path: '/workflow',
      },
      {
        component: processManagePage,
        path: '/processManage',
      },
    ],
  },
];

export default routes;
