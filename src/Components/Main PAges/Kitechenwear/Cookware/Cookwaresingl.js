import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cookwarsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/cookwarsingle');

export default Cookwarsingl;