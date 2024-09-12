import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Firstaidsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Firstaidsingle');

export default Firstaidsingle;