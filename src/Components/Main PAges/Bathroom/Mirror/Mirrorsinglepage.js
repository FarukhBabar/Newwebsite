import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Mirrorsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mirrorsingle');

export default Mirrorsinglepage;
