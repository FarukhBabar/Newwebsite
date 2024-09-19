import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Soudalsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/soudalsingle');

export default Soudalsingl;