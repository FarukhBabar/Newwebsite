import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Blacksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/blacksingle');

export default Blacksingle;
