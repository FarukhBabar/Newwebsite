import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const VfmPaintssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/vfmpaintsingle');

export default VfmPaintssingl;