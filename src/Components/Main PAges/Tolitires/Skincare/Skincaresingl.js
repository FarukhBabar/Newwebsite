
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Skincaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/skincaresingle');

export default Skincaresingle;