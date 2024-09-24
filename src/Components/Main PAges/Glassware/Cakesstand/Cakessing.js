import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cakessing = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/cakessingle');

export default Cakessing;
