import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cookwaresingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Cookwaresingle');

export default Cookwaresingle;