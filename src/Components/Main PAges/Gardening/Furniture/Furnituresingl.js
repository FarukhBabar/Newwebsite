import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Furnitursingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/furnitursingle');

export default Furnitursingle;