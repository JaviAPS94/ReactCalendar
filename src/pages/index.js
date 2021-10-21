import Loadable from 'react-loadable';
import PageLoader from '../components/pageLoader/index';

export const RemindersCalendar = Loadable({
  loader: () => import('./reminder/index'),
  loading: PageLoader,
});
