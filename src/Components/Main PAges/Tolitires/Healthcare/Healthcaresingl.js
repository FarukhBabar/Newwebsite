import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Healthcaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/healthsingle');

export default Healthcaresingle;