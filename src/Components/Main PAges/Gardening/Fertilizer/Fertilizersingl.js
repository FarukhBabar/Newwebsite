import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Fertilizersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/fertilizersingle');

export default Fertilizersingle;