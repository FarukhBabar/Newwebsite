import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bleechsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bleechsingle');

export default Bleechsingl;