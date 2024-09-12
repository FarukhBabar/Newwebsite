
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const KitechenKnisingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kitechenknisingle');

export default KitechenKnisingl;