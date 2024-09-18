import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bbqsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bbqsingle');

export default Bbqsingle;