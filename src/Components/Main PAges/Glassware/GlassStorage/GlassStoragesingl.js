import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const GlassStoragesingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glassstoragesingle');

export default GlassStoragesingl;