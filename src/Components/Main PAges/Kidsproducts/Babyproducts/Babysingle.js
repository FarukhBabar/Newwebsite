import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Babysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/babeysingle');

export default Babysingle;