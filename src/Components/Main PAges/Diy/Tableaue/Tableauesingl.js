import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Tableauesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/tableausingle');

export default Tableauesingl;