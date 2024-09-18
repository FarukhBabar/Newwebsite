import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Babaysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/babysingle');

export default Babaysingle;