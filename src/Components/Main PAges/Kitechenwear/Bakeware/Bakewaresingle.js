import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bakewaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bakewaresingle');

export default Bakewaresingle;
