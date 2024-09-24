import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const GlassTumblersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glasstablewaresingle');

export default GlassTumblersingl;