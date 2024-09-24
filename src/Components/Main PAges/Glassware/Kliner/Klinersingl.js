import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Klinersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/klinersingle');

export default Klinersingl;