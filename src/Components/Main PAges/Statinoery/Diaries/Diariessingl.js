
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Diariessingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/diariessingle');

export default Diariessingle;