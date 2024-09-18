import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Sanitarysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/sanitarysingle');

export default Sanitarysingle;