import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const KitchenACCsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kitechenaccsingle');

export default KitchenACCsingl;