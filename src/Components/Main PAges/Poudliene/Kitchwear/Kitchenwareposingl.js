import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kitchenwareposingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kitchenpoundsingle');

export default Kitchenwareposingl;