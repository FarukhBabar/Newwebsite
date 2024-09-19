import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Souvenirssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/souvenirssingle');

export default Souvenirssingl;