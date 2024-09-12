import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Showersingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/showersingle');

export default Showersingle;