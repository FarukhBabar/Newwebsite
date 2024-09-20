import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Wernersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/wernersingle');

export default Wernersingl;