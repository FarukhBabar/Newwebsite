import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Stsingal = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/stsingle');

export default Stsingal;