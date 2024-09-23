import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const DrinkingGlasssingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/drinkingglasssingle');

export default DrinkingGlasssingel;