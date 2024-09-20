import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bouquetsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bouquetsingle');

export default Bouquetsingl;