import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Digitalsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/digitalsingle');

export default Digitalsingle;