import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Wd40singl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/wd40single');

export default Wd40singl;