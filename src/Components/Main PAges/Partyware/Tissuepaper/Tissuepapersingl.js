
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Tissuepapersingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bannersingle');

export default Tissuepapersingl;
