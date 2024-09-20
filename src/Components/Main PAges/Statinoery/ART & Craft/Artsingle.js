import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Artsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/artcraftsingle');

export default Artsingle;