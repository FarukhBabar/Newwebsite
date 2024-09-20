import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Velcrosingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/velcrosingle');

export default Velcrosingl;