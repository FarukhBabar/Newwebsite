import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Crockerysingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Crockerysingle');

export default Crockerysingle;