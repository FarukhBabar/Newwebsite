import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Mouthwashsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mouthsingle');

export default Mouthwashsingle;