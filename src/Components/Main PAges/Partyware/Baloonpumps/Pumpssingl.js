import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Pumpssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/pumpssingle');

export default Pumpssingl;