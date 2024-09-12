import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Pestconsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/pestconsingle');

export default Pestconsingl;