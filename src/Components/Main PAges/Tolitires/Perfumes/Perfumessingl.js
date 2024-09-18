import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Perfumessingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/perfumesingle');

export default Perfumessingle;