import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Pyrexsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/pyrexsingle');

export default Pyrexsingl;