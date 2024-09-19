import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Antiquxsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/antiquxsingle');

export default Antiquxsingle;