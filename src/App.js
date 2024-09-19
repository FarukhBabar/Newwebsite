import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ProtectedRoutes from './ProtectedRoutes'
import Poundline from './Components/Main PAges/Poundline'
import Debathroom from './Components/Main PAges/Debathroom'
import Loundrysubcat from './Components/Main PAges/Loundrysubcat'
import Kitechendde from './Components/Main PAges/Kitechendde'
import Cleaning from './Components/Main PAges/Cleaning'
import Gardening from './Components/Main PAges/Gardening'
import Tolitries from './Components/Main PAges/Tolitries'
import Homedecor from './Components/Main PAges/Homedecor'
import Diy from './Components/Main PAges/Diy'
import Houseclaner from './Components/Main PAges/Houseclaner'
import PlasticHouseware from './Components/Main PAges/PlasticHouseware'
import Foodmainpage from './Components/Main PAges/FoodandDeink/Foodmainpage'
import Foodsinglpage from './Components/Main PAges/FoodandDeink/Foodsinglpage'
import Foodform from './Components/Main PAges/FoodandDeink/Foodform'
import Listfood from './Components/Main PAges/FoodandDeink/Listfood'
import Updatefood from './Components/Main PAges/FoodandDeink/Updatefood'
import LoginForm from './Components/LoginForm'
import Forgetpassword from './Components/Forgetpassword'
import VerifyOtp from './Components/VerifyOtp'
import Admindashboard from './Components/Admindashboard'
import Drinkpage from './Components/Main PAges/Drink/Drinkmain'
import Drinkssingle from './Components/Main PAges/Drink/Drinksingle'
import Drinkform from './Components/Main PAges/Drink/Drinkform'
import Listdrink from './Components/Main PAges/Drink/Drinklist'
import Updatedrink from './Components/Main PAges/Drink/Drinkupdate'
import { CartProvider } from './Components/CartContext';
import Electricalde from './Components/Main PAges/Electrical/Electricalde'
import Electricalsinglepage from './Components/Main PAges/Electrical/Electricalsinglepage'
import Smokingessentials from './Components/Main PAges/SmokingEssentials/Smokingessentials'
import Smokingsinglepage from './Components/Main PAges/SmokingEssentials/Smokingsinglepage'
import Lightersinglepage from './Components/Main PAges/Smoking/Lightersinglepage'
import Lighter from './Components/Main PAges/Smoking/Lighter'
import Electricalform from './Components/Main PAges/Electrical/Electricalform'
import Listofelectrical from './Components/Main PAges/Electrical/Listofelectrical'
import Updateelectrical from './Components/Main PAges/Electrical/Updateelectrical'
import Smokingessform from './Components/Main PAges/SmokingEssentials/Smokingessform'
import Smokingesslist from './Components/Main PAges/SmokingEssentials/Smokingesslist'
import Updatesmokingess from './Components/Main PAges/SmokingEssentials/Updatesmokingess'
import Lighterform from './Components/Main PAges/Smoking/Lighterform'
import Listoflighter from './Components/Main PAges/Smoking/Listoflighter'
import Updatelighter from './Components/Main PAges/Smoking/Updatelighter'
import Bathroomp from './Components/Main PAges/Poudliene/Bathroom/Bathroomp'
import Bathroomsingle from './Components/Main PAges/Poudliene/Bathroom/Bathroomsingle'
import Candeles from './Components/Main PAges/Poudliene/Candeles/Candeles'
import Candelessingl from './Components/Main PAges/Poudliene/Candeles/Candelessingl'
import Carpo from './Components/Main PAges/Poudliene/Carproducts/Carpo'
import Carposingl from './Components/Main PAges/Poudliene/Carproducts/Carposingl'
import Craftpo from './Components/Main PAges/Poudliene/Craft/Craftpo'
import Craftsingl from './Components/Main PAges/Poudliene/Craft/Craftsingl'
import Disposible from './Components/Main PAges/Poudliene/Disposible/Disposible'
import Disposiblesingl from './Components/Main PAges/Poudliene/Disposible/Disposbilesingle'
import Diytoolspo from './Components/Main PAges/Poudliene/Diytools/Diytoolspo'
import Diytoolssingl from './Components/Main PAges/Poudliene/Diytools/Diytoolssingl'
import Bathroomform from './Components/Main PAges/Poudliene/Bathroom/Bathroomform'
import Bathroomlist from './Components/Main PAges/Poudliene/Bathroom/Bathroomlist'
import Updatebathroom from './Components/Main PAges/Poudliene/Bathroom/Updatebathroom'
import Candelesform from './Components/Main PAges/Poudliene/Candeles/Candelesform'
import Candeleslist from './Components/Main PAges/Poudliene/Candeles/Candeleslist'
import Candelesupdate from './Components/Main PAges/Poudliene/Candeles/Candelesupdate'
import Carpoform from './Components/Main PAges/Poudliene/Carproducts/Carpoform'
import Carpolist from './Components/Main PAges/Poudliene/Carproducts/Carpolist'
import Carpoupdate from './Components/Main PAges/Poudliene/Carproducts/Carpoupdate'
import Craftform from './Components/Main PAges/Poudliene/Craft/Craftform'
import Craftlist from './Components/Main PAges/Poudliene/Craft/Craftlist'
import Craftupdate from './Components/Main PAges/Poudliene/Craft/Craftupdate'
import Disposibleformpo from './Components/Main PAges/Poudliene/Disposible/Disposibleformpo'
import Disposiblelistpo from './Components/Main PAges/Poudliene/Disposible/Disposiblelistpo'
import Disposibleupdatepo from './Components/Main PAges/Poudliene/Disposible/Disposibleupdatepo'
import Diytoolsform from './Components/Main PAges/Poudliene/Diytools/Diytoolsform'
import Diytoolsupdate from './Components/Main PAges/Poudliene/Diytools/Diytoolsupdate'
import Diytoolslist from './Components/Main PAges/Poudliene/Diytools/Diytoolslist'
import Firstaidmain from './Components/Main PAges/Poudliene/Firstaidpharmacy/Firstaidmain'
import Firstaidsingle from './Components/Main PAges/Poudliene/Firstaidpharmacy/Firstaidsingle'
import Foodpound from './Components/Main PAges/Poudliene/Foodpoundline/Foodpound'
import Foodposingl from './Components/Main PAges/Poudliene/Foodpoundline/Foodposingl'
import Hosierysingl from './Components/Main PAges/Poudliene/Hosiery/Hosierysingl'
import Hosiery from './Components/Main PAges/Poudliene/Hosiery/Hosiery'
import Householdcl from './Components/Main PAges/Poudliene/Householdcleaning/Householdcl'
import Househldpr from './Components/Main PAges/Poudliene/Householdproducts/Househldpr'
import Househldprsingl from './Components/Main PAges/Poudliene/Householdproducts/Househldprsingl'
import Householdclsingl from './Components/Main PAges/Poudliene/Householdcleaning/Householdclsingl'
import Kitchenwarepo from './Components/Main PAges/Poudliene/Kitchwear/Kitchenwarepo'
import Kitchenwareposingl from './Components/Main PAges/Poudliene/Kitchwear/Kitchenwareposingl'
import Lightergas from './Components/Main PAges/Poudliene/Lightergas/Lightergas'
import Lightergassingl from './Components/Main PAges/Poudliene/Lightergas/Lightergassingl'
import Loundryiron from './Components/Main PAges/Poudliene/Loundryiron/Loundryiron'
import Loundryirsingl from './Components/Main PAges/Poudliene/Loundryiron/Loundryirsingl'
import Pestcon from './Components/Main PAges/Poudliene/PestControl/Pestcon'
import Pestconsingl from './Components/Main PAges/Poudliene/PestControl/Pestconsingl'
import Reading from './Components/Main PAges/Poudliene/Reading/Reading'
import Readingsingl from './Components/Main PAges/Poudliene/Reading/Readingsingl'
import Shoecare from './Components/Main PAges/Poudliene/Shoecare/Shoecare'
import Shoesingl from './Components/Main PAges/Poudliene/Shoecare/Shoesingl'
import Stationerypo from './Components/Main PAges/Poudliene/Stationery/Stationerypo'
import Stationerysingl from './Components/Main PAges/Poudliene/Stationery/Stationerysingl'
import Potoy from './Components/Main PAges/Poudliene/Toys/Potoy'
import Potoysingl from './Components/Main PAges/Poudliene/Toys/Potoysingl'
import Electric from './Components/Main PAges/Poudliene/Electricde/Electric'
import Electricaldepage from './Components/Main PAges/Electrical/Electricaldepage'
import Bathmatsmain from './Components/Main PAges/Bathroom/Bathmats/Bathmatsmain'
import Bathmatssinglr from './Components/Main PAges/Bathroom/Bathmats/Bathmatssinglr'
import Bathacessories from './Components/Main PAges/Bathroom/Bathroomacessories/Bathacessories'
import Bathacessoriessingle from './Components/Main PAges/Bathroom/Bathroomacessories/Bathacessoriessingle'
import Bathroommain from './Components/Main PAges/Bathroom/Bathroomscale.js/Bathroommain'
import Bathroomsinglede from './Components/Main PAges/Bathroom/Bathroomscale.js/Bathroomsinglede'
import Mirrormain from './Components/Main PAges/Bathroom/Mirror/Mirrormain'
import Mirrorsinglepage from './Components/Main PAges/Bathroom/Mirror/Mirrorsinglepage'
import Showermain from './Components/Main PAges/Bathroom/Shower/Showermain'
import Showersingle from './Components/Main PAges/Bathroom/Shower/Showersingle'
import Showhead from './Components/Main PAges/Bathroom/Showershead/Showhead'
import Showheadsingle from './Components/Main PAges/Bathroom/Showershead/Showheadsingle'
import Airerspage from './Components/Main PAges/Laundry/Airers/Airerspage'
import Airerssingle from './Components/Main PAges/Laundry/Airers/Airerssingle'
import Bags from './Components/Main PAges/Laundry/Bags/Bags'
import Bagssingle from './Components/Main PAges/Laundry/Bags/Bagssingl'
import Basketst from './Components/Main PAges/Laundry/Basketstorgae/Basketst'
import Basketstsingle from './Components/Main PAges/Laundry/Basketstorgae/Basketstsingl'
import Ironingpage from './Components/Main PAges/Laundry/Ironing Board/Ironingpage'
import Ioriningsingle from './Components/Main PAges/Laundry/Ironing Board/Ioriningsingle'
import Laacess from './Components/Main PAges/Laundry/Laundryacessories/Laacess'
import Laacesssingle from './Components/Main PAges/Laundry/Laundryacessories/Laacesssingle'
import Luggage from './Components/Main PAges/Laundry/Luggage/Luggage'
import Luggagesingl from './Components/Main PAges/Laundry/Luggage/Luggagesingl'
import Bakeware from './Components/Main PAges/Kitechenwear/Bakeware/Bakeware'
import Bakewaresingle from './Components/Main PAges/Kitechenwear/Bakeware/Bakewaresingle'
import Barewear from './Components/Main PAges/Kitechenwear/Barewear/Barewear'
import Barewearsingl from './Components/Main PAges/Kitechenwear/Barewear/Barewearsingl'
import Breadsingl from './Components/Main PAges/Kitechenwear/Breadbeans/Breadsingl'
import Bread from './Components/Main PAges/Kitechenwear/Breadbeans/Bread'
import Catering from './Components/Main PAges/Kitechenwear/Catering/Catering'
import Cateringsingl from './Components/Main PAges/Kitechenwear/Catering/Cateringsingl'
import Chrome from './Components/Main PAges/Kitechenwear/Chrome/Chrome'
import Chromesingl from './Components/Main PAges/Kitechenwear/Chrome/Chromesingl'
import Cookwar from './Components/Main PAges/Kitechenwear/Cookware/Cookwar'
import Cookwarsingl from './Components/Main PAges/Kitechenwear/Cookware/Cookwaresingl'
import Cutlery from './Components/Main PAges/Kitechenwear/Cutlery/Cutlery'
import Cutlerysingl from './Components/Main PAges/Kitechenwear/Cutlery/Cutlerysingl'
import Kettles from './Components/Main PAges/Kitechenwear/Kettles/Kettles'
import Kettlessingl from './Components/Main PAges/Kitechenwear/Kettles/Kettlessingl'
import KitchenACC from './Components/Main PAges/Kitechenwear/KitchenACC/KitchenACC'
import KitchenACCsingl from './Components/Main PAges/Kitechenwear/KitchenACC/KitchenACCsingl'
import Kitechenbin from './Components/Main PAges/Kitechenwear/Kitechenbin/Kitechenbin'
import Kitechenbinsingl from './Components/Main PAges/Kitechenwear/Kitechenbin/Kitechenbinsingl'
import Kitechenga from './Components/Main PAges/Kitechenwear/Kitechengadgets/Kitechenga'
import Kitechengasingl from './Components/Main PAges/Kitechenwear/Kitechengadgets/Kitechengasingl'
import KitechenKni from './Components/Main PAges/Kitechenwear/kitechenKnife/KitechenKni'
import KitechenKnisingl from './Components/Main PAges/Kitechenwear/kitechenKnife/KitechenKnisingl'
import Scaleski from './Components/Main PAges/Kitechenwear/KitechenScales/Scaleski'
import Scaleskisingl from './Components/Main PAges/Kitechenwear/KitechenScales/Scaleskisingl'
import Plasticki from './Components/Main PAges/Kitechenwear/Plastickitechenware/Plasticki'
import Plastickisingl from './Components/Main PAges/Kitechenwear/Plastickitechenware/Plastickisingl'
import Simplehu from './Components/Main PAges/Kitechenwear/Simple Human/Simplehu'
import Simplehusingl from './Components/Main PAges/Kitechenwear/Simple Human/Simplehusingl'
import Tea from './Components/Main PAges/Kitechenwear/Tea/Tea'
import Teasingl from './Components/Main PAges/Kitechenwear/Tea/Teasingl'
import Trays from './Components/Main PAges/Kitechenwear/Trays/Trays'
import Trayssingl from './Components/Main PAges/Kitechenwear/Trays/Trayssingl'
import Water from './Components/Main PAges/Kitechenwear/Waterfilter/Water'
import Watersingl from './Components/Main PAges/Kitechenwear/Waterfilter/Watersingl'
import Wooden from './Components/Main PAges/Kitechenwear/Wooden/Wooden'
import Woodensingl from './Components/Main PAges/Kitechenwear/Wooden/Woodensingl'
import Brushware from './Components/Main PAges/Cleaning matterial/Brushare/Brushware'
import Brushwaresingel from './Components/Main PAges/Cleaning matterial/Brushare/Brushwaresingl'
import Duster from './Components/Main PAges/Cleaning matterial/Clothandduster/Duster'
import Dustersingl from './Components/Main PAges/Cleaning matterial/Clothandduster/Dustersingl'
import Gloves from './Components/Main PAges/Cleaning matterial/Gloves/Gloves'
import Glovessingl from './Components/Main PAges/Cleaning matterial/Gloves/Glovessingl'
import Mops from './Components/Main PAges/Cleaning matterial/Mops/Mops'
import Mopssingl from './Components/Main PAges/Cleaning matterial/Mops/Mopssingl'
import Sponge from './Components/Main PAges/Cleaning matterial/Sponge/Sponge'
import Spongesingl from './Components/Main PAges/Cleaning matterial/Sponge/Spongesingl'
import Bbq from './Components/Main PAges/Gardening/BBq/Bbq'
import Bbqsingle from './Components/Main PAges/Gardening/BBq/Bbqsingl'
import Bird from './Components/Main PAges/Gardening/Birdcare/Bird'
import Birdsingle from './Components/Main PAges/Gardening/Birdcare/Birdsingle'
import Camping from './Components/Main PAges/Gardening/Camping/Camping'
import Campingsingle from './Components/Main PAges/Gardening/Camping/Campingsingl'
import Fertilizer from './Components/Main PAges/Gardening/Fertilizer/Fertilizer'
import Fertilizersingle from './Components/Main PAges/Gardening/Fertilizer/Fertilizersingl'
import Furnitur from './Components/Main PAges/Gardening/Furniture/Furnitur'
import Furnitursingle from './Components/Main PAges/Gardening/Furniture/Furnituresingl'
import Giftware from './Components/Main PAges/Gardening/Giftware/Giftware'
import Giftwaresingle from './Components/Main PAges/Gardening/Giftware/Giftwaresingl'
import Growing from './Components/Main PAges/Gardening/Growing Media/Growing'
import Growingsingle from './Components/Main PAges/Gardening/Growing Media/Growingsingl'
import Lightening from './Components/Main PAges/Gardening/Lightening/Lightening'
import Lighteningsingle from './Components/Main PAges/Gardening/Lightening/Lighteningsingl'
import Planters from './Components/Main PAges/Gardening/Planters/Planters'
import Planterssingle from './Components/Main PAges/Gardening/Planters/Planterssingl'
import Toolsacce from './Components/Main PAges/Gardening/Tools&Accessories/Toolsacce'
import Toolsaccesingle from './Components/Main PAges/Gardening/Tools&Accessories/Toolsaccesingl'
import Watering from './Components/Main PAges/Gardening/Watering/Watering'
import Wateringsingle from './Components/Main PAges/Gardening/Watering/Wateringsingl'
import Winterfules from './Components/Main PAges/Gardening/Winterfules/Winterfules'
import Winterfulessingle from './Components/Main PAges/Gardening/Winterfules/Winterfulessingl'
import Babycare from './Components/Main PAges/Tolitires/Babycare/Babycare'
import Babaysingle from './Components/Main PAges/Tolitires/Babycare/Babaysingle'
import Cotton from './Components/Main PAges/Tolitires/Cottonwhool/Cotton'
import Cottonsingle from './Components/Main PAges/Tolitires/Cottonwhool/Cottonsingle'
import Deodrant from './Components/Main PAges/Tolitires/Deodrant/Deodrant'
import Deodrantsingle from './Components/Main PAges/Tolitires/Deodrant/Deodrantsingl'
import Giftsets from './Components/Main PAges/Tolitires/Gift sets/Giftsets'
import Giftsetssingle from './Components/Main PAges/Tolitires/Gift sets/Giftsetssingl'
import Hair from './Components/Main PAges/Tolitires/Hair Product/Hair'
import Hairsingle from './Components/Main PAges/Tolitires/Hair Product/Hairsingl'
import Hand from './Components/Main PAges/Tolitires/Handwash/Hand'
import Handsingle from './Components/Main PAges/Tolitires/Handwash/Handsingl'
import Healthcare from './Components/Main PAges/Tolitires/Healthcare/Healthcare'
import Healthcaresingle from './Components/Main PAges/Tolitires/Healthcare/Healthcaresingl'
import Mouthwash from './Components/Main PAges/Tolitires/Mouthwash/Mouthwash'
import Mouthwashsingle from './Components/Main PAges/Tolitires/Mouthwash/Mouthwashsingl'
import Perfumes from './Components/Main PAges/Tolitires/Perfumes/Perfumes'
import Perfumessingle from './Components/Main PAges/Tolitires/Perfumes/Perfumessingl'
import Sanitary from './Components/Main PAges/Tolitires/Sanitary/Sanitary'
import Sanitarysingle from './Components/Main PAges/Tolitires/Sanitary/Sanitarysingl'
import Saving from './Components/Main PAges/Tolitires/Saving/Saving'
import Savingsingle from './Components/Main PAges/Tolitires/Saving/Savingsingl'
import Shampo from './Components/Main PAges/Tolitires/Shampo/Shampo'
import Shamposingle from './Components/Main PAges/Tolitires/Shampo/Shamposingl'
import Showergelsingle from './Components/Main PAges/Tolitires/Showergel/Showergelsingl'
import Showergel from './Components/Main PAges/Tolitires/Showergel/Showergel'
import Skincare from './Components/Main PAges/Tolitires/Skincare/Skincare'
import Skincaresingle from './Components/Main PAges/Tolitires/Skincare/Skincaresingl'
import Soapbar from './Components/Main PAges/Tolitires/Soapbar/Soapbar'
import Soapbarsingle from './Components/Main PAges/Tolitires/Soapbar/Soapbarsingl'
import Toothbrush from './Components/Main PAges/Tolitires/Toothbrush.js/Toothbrush'
import Toothbrushsingle from './Components/Main PAges/Tolitires/Toothbrush.js/Toothbrushsingl'
import Toothpast from './Components/Main PAges/Tolitires/Toothpast/Toothpast'
import Toothpastsingle from './Components/Main PAges/Tolitires/Toothpast/Toothpastsingl'
import Africa from './Components/Main PAges/Tolitires/west Africa/Africa'
import Africasingle from './Components/Main PAges/Tolitires/west Africa/Africasingl'
import Candel from './Components/Main PAges/Home decore/Candels/Candel'
import Candelsingl from './Components/Main PAges/Home decore/Candels/Candelsingl'
import Fatherdays from './Components/Main PAges/Home decore/Fatherdays/Fatherdays'
import Fatherdayssingl from './Components/Main PAges/Home decore/Fatherdays/Fatherdayssingl'
import Framsmirror from './Components/Main PAges/Home decore/Frams&mirror/Framsmirror'
import Framsmirrorsingl from './Components/Main PAges/Home decore/Frams&mirror/Framsmirrorsingl'
import Giftwarehome from './Components/Main PAges/Home decore/Giftwarehome/Giftwarehome'
import Giftwarehomesingl from './Components/Main PAges/Home decore/Giftwarehome/Giftwarehomesingl'
import Incense from './Components/Main PAges/Home decore/Incense/Incense'
import Incensesingl from './Components/Main PAges/Home decore/Incense/Incensesingl'
import Memorials from './Components/Main PAges/Home decore/Memorials/Memorials'
import Memorialssingl from './Components/Main PAges/Home decore/Memorials/Memorialssingl'
import Souvenirs from './Components/Main PAges/Home decore/Souvenirs/Souvenirs'
import Souvenirssingl from './Components/Main PAges/Home decore/Souvenirs/Souvenirssingl'
import St from './Components/Main PAges/Home decore/St George/St'
import Stsingal from './Components/Main PAges/Home decore/St George/Stsingal'
import Weeding from './Components/Main PAges/Home decore/Weeding/Weeding'
import Weedingsingal from './Components/Main PAges/Home decore/Weeding/Weedingsingl'
import Freshn from './Components/Main PAges/HouseCleaner/Airfresh/Freshn'
import Freshnsingle from './Components/Main PAges/HouseCleaner/Airfresh/Freshnsingle'
import Bleech from './Components/Main PAges/HouseCleaner/Bleech/Bleech'
import Bleechsingl from './Components/Main PAges/HouseCleaner/Bleech/Bleechsingl'
import Car from './Components/Main PAges/HouseCleaner/Carcare/Car'
import Carsingle from './Components/Main PAges/HouseCleaner/Carcare/Carsingle'
import Foodcon from './Components/Main PAges/Plasticshousewear/FoodContainer/Foodcon'
import Foodconsingl from './Components/Main PAges/Plasticshousewear/FoodContainer/Foodconsingl'
import Handwash from './Components/Main PAges/Plasticshousewear/Handwash/Handwash'
import Handwashsingl from './Components/Main PAges/Plasticshousewear/Handwash/Handwashsingl'
import Healthcaree from './Components/Main PAges/Plasticshousewear/Healthcare/Healthcaree'
import Healthcareesingl from './Components/Main PAges/Plasticshousewear/Healthcare/Healthcareesingl'
import Kidsplas from './Components/Main PAges/Plasticshousewear/Kids Plastic Products/Kidsplas'
import Kidsplassingl from './Components/Main PAges/Plasticshousewear/Kids Plastic Products/Kidsplassingl'
import MelamineOutdoor from './Components/Main PAges/Plasticshousewear/MelamineOutdoor/MelamineOutdoor'
import MelamineOutdoorsingl from './Components/Main PAges/Plasticshousewear/MelamineOutdoor/MelamineOutdoorsingl'
import Kidsbathrom from './Components/Main PAges/Plasticshousewear/Plastic Bathroom Products/Kidsbathrom'
import Kidsbathromsingl from './Components/Main PAges/Plasticshousewear/Plastic Bathroom Products/Kidsbathromsingl'
import Plasticcabnit from './Components/Main PAges/Plasticshousewear/Plastic Drawer Cabinet/Plasticcabnit'
import Plasticcabnitsingl from './Components/Main PAges/Plasticshousewear/Plastic Drawer Cabinet/Plasticcabnitsingl'
import Barrettine from './Components/Main PAges/Diy/Barrettine/Barrettine'
import Barrettinesingle from './Components/Main PAges/Diy/Barrettine/Barrettinesingl'
import Bartolin from './Components/Main PAges/Diy/Bartolin/Bartolin'
import Bartolinsingle from './Components/Main PAges/Diy/Bartolin/Bartolinsingl'
import Birdbrand from './Components/Main PAges/Diy/Birdbrand/Birdbrand'
import Birdbrandsingle from './Components/Main PAges/Diy/Birdbrand/Birdbrandsingl'
import Black from './Components/Main PAges/Diy/Blackspur/Black'
import Blacksingle from './Components/Main PAges/Diy/Blackspur/Blacksingl'
import Bonit from './Components/Main PAges/Diy/Bondit/Bonit'
import Bonitsingle from './Components/Main PAges/Diy/Bondit/Bonitsingl'
const AdminLayout = ({ children }) => (
  
  <>
  {/* <Adminnavbar/> */}
  <div>{children}</div>
  </>
);
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);
const App = () => {
  return (
    <div>
  
      <CartProvider>
      <Routes>
           <Route element={<ProtectedRoutes/>}>
        <Route path='/adminpanal' element={<AdminLayout><Admindashboard/></AdminLayout>} />
          <Route path='/foodform' element={<AdminLayout><Foodform /></AdminLayout>} />
        <Route path='/listfood' element={<AdminLayout><Listfood/></AdminLayout>} />
        <Route path='/listfood/:id' element={<AdminLayout><Updatefood /></AdminLayout>} />
        <Route path='/drinkform' element={<AdminLayout><Drinkform /></AdminLayout>} />
        <Route path='/listdrink' element={<AdminLayout><Listdrink/></AdminLayout>} />
        <Route path='/listdrink/:id' element={<AdminLayout><Updatedrink /></AdminLayout>} />

        <Route path='/electricalform' element={<AdminLayout><Electricalform /></AdminLayout>} />
        <Route path='/listelectrical' element={<AdminLayout><Listofelectrical/></AdminLayout>} />
        <Route path='/listelectrical/:id' element={<AdminLayout><Updateelectrical /></AdminLayout>} />

        <Route path='/smokingform' element={<AdminLayout><Smokingessform /></AdminLayout>} />
        <Route path='/listsmoking' element={<AdminLayout><Smokingesslist/></AdminLayout>} />
        <Route path='/listsmoking/:id' element={<AdminLayout><Updatesmokingess /></AdminLayout>} />

        <Route path='/lighterform' element={<AdminLayout><Lighterform /></AdminLayout>} />
        <Route path='/listlighter' element={<AdminLayout><Listoflighter/></AdminLayout>} />
        <Route path='/listlighter/:id' element={<AdminLayout><Updatelighter /></AdminLayout>} />

       <Route path='/bathroomform' element={<AdminLayout><Bathroomform /></AdminLayout>} />
        <Route path='/listbathroom' element={<AdminLayout><Bathroomlist/></AdminLayout>} />
        <Route path='/listbathroom/:id' element={<AdminLayout><Updatebathroom /></AdminLayout>} />
         <Route path='/candelform' element={<AdminLayout><Candelesform /></AdminLayout>} />
        <Route path='/listcandel' element={<AdminLayout><Candeleslist/></AdminLayout>} />
        <Route path='/listcandel/:id' element={<AdminLayout><Candelesupdate /></AdminLayout>} />
          <Route path='/carproductform' element={<AdminLayout><Carpoform /></AdminLayout>} />
        <Route path='/listcarproduct' element={<AdminLayout><Carpolist/></AdminLayout>} />
        <Route path='/listcarproduct/:id' element={<AdminLayout><Carpoupdate/></AdminLayout>} />  <Route path='/craftform' element={<AdminLayout><Craftform /></AdminLayout>} />
        <Route path='/listcraft' element={<AdminLayout><Craftlist/></AdminLayout>} />
        <Route path='/listcraft/:id' element={<AdminLayout><Craftupdate /></AdminLayout>} />  
        <Route path='/disposibleform' element={<AdminLayout><Disposibleformpo /></AdminLayout>} />
        <Route path='/listdisposible' element={<AdminLayout><Disposiblelistpo/></AdminLayout>} />
        <Route path='/listdisposible/:id' element={<AdminLayout><Disposibleupdatepo /></AdminLayout>} />
        <Route path='/diytoolform' element={<AdminLayout><Diytoolsform /></AdminLayout>} />
        <Route path='/listdiytool' element={<AdminLayout><Diytoolslist/></AdminLayout>} />
        <Route path='/listdiytool/:id' element={<AdminLayout><Diytoolsupdate /></AdminLayout>} />
        </Route>
        {/* ---Main Routes----- */}
        <Route path='/forget' element={<Forgetpassword/>}  />
        <Route path='/verifyotp' element={<VerifyOtp/>}/>
          <Route path='/' element={<MainLayout><Home/></MainLayout>}/>
          <Route path='/login' element={<MainLayout><LoginForm/></MainLayout>}/>
           <Route path='/category/poundline' element={<MainLayout><Poundline/></MainLayout>}/>
           <Route path='/category/bathroom' element={<MainLayout><Debathroom/></MainLayout>}/>
            <Route path='/category/loundry' element={<MainLayout><Loundrysubcat/></MainLayout>}/>
            <Route path='/kitechenware' element={<MainLayout><Kitechendde/></MainLayout>}/>
            <Route path='/cleaning' element={<MainLayout><Cleaning/></MainLayout>}/>
            <Route path='/gardening' element={<MainLayout><Gardening/></MainLayout>}/>
            <Route path='/tolitries' element={<MainLayout><Tolitries/></MainLayout>}/>
            <Route path='/homedecor' element={<MainLayout><Homedecor/></MainLayout>}/>
            <Route path='/diy' element={<MainLayout><Diy/></MainLayout>}/> 
            <Route path='/houseclaner' element={<MainLayout><Houseclaner/></MainLayout>}/>
            <Route path='/plastichouseware' element={<MainLayout><PlasticHouseware/></MainLayout>}/>
             <Route path='/food' element={<MainLayout><Foodmainpage/></MainLayout>}/>
              <Route path='/product/food/:id' element={<MainLayout><Foodsinglpage/></MainLayout>}/>
             <Route path='/drink' element={<MainLayout><Drinkpage/></MainLayout>}/>
              <Route path='/product/drink/:id' element={<MainLayout><Drinkssingle/></MainLayout>}/>

              <Route path='/electrical' element={<MainLayout><Electricalde/></MainLayout>}/>
              <Route path='/product/electrical/:id' element={<MainLayout><Electricalsinglepage/></MainLayout>}/>
              <Route path='/smoking' element={<MainLayout><Smokingessentials/></MainLayout>}/>
              <Route path='/product/smoking/:id' element={<MainLayout><Smokingsinglepage/></MainLayout>}/>

              <Route path='/lighter' element={<MainLayout><Lighter/></MainLayout>}/>
              <Route path='/product/lighter/:id' element={<MainLayout><Lightersinglepage/></MainLayout>}/>

               <Route path='/category/poundline/bathroom' element={<MainLayout><Bathroomp/></MainLayout>}/>
              <Route path='/product/bathroom/:id' element={<MainLayout><Bathroomsingle/></MainLayout>}/>
                <Route path='/category/poundline/candels' element={<MainLayout><Candeles/></MainLayout>}/>
              <Route path='/product/candels/:id' element={<MainLayout><Candelessingl/></MainLayout>}/>
              <Route path='/category/poundline/carproduct' element={<MainLayout><Carpo/></MainLayout>}/>
              <Route path='/product/carproduct/:id' element={<MainLayout><Carposingl/></MainLayout>}/>
               <Route path='/category/poundline/craft' element={<MainLayout><Craftpo/></MainLayout>}/>
              <Route path='/product/craft/:id' element={<MainLayout><Craftsingl/></MainLayout>}/>
                <Route path='/category/poundline/disposible' element={<MainLayout><Disposible/></MainLayout>}/>
              <Route path='/product/disposible/:id' element={<MainLayout><Disposiblesingl/></MainLayout>}/>
              <Route path='/category/poundline/diytools' element={<MainLayout><Diytoolspo/></MainLayout>}/>
              <Route path='/product/diytools/:id' element={<MainLayout><Diytoolssingl/></MainLayout>}/>
              <Route path='/category/poundline/firstaid' element={<MainLayout><Firstaidmain/></MainLayout>}/>
              <Route path='/product/firstaid/:id' element={<MainLayout><Firstaidsingle/></MainLayout>}/>
              <Route path='/category/poundline/foundpound' element={<MainLayout><Foodpound/></MainLayout>}/>
              <Route path='/product/foundpound/:id' element={<MainLayout><Foodposingl/></MainLayout>}/>
               <Route path='/category/poundline/hosiery' element={<MainLayout><Hosiery/></MainLayout>}/>
              <Route path='/product/hosiery/:id' element={<MainLayout><Hosierysingl/></MainLayout>}/>
                <Route path='/category/poundline/householdcleaning' element={<MainLayout><Householdcl/></MainLayout>}/>
              <Route path='/product/householdcleaning/:id' element={<MainLayout><Householdclsingl/></MainLayout>}/>
                <Route path='/category/poundline/householdproduct' element={<MainLayout><Househldpr/></MainLayout>}/>
              <Route path='/product/householdproduct/:id' element={<MainLayout><Househldprsingl/></MainLayout>}/>
               <Route path='/category/poundline/kitchenwarepou' element={<MainLayout><Kitchenwarepo/></MainLayout>}/>
              <Route path='/product/kitchenwarepou/:id' element={<MainLayout><Kitchenwareposingl/></MainLayout>}/>

                 <Route path='/category/poundline/lightergas' element={<MainLayout><Lightergas/></MainLayout>}/>
              <Route path='/product/lightergas/:id' element={<MainLayout><Lightergassingl/></MainLayout>}/>

                 <Route path='/category/poundline/loundryiron' element={<MainLayout><Loundryiron/></MainLayout>}/>
              <Route path='/product/loundryiron/:id' element={<MainLayout><Loundryirsingl/></MainLayout>}/>

               <Route path='/category/poundline/pestcon' element={<MainLayout><Pestcon/></MainLayout>}/>
              <Route path='/product/pestcon/:id' element={<MainLayout><Pestconsingl/></MainLayout>}/>

               <Route path='/category/poundline/readingglasses' element={<MainLayout><Reading/></MainLayout>}/>
              <Route path='/product/readingglasses/:id' element={<MainLayout><Readingsingl/></MainLayout>}/>
              
               <Route path='/category/poundline/shoecare' element={<MainLayout><Shoecare/></MainLayout>}/>
              <Route path='/product/shoecare/:id' element={<MainLayout><Shoesingl/></MainLayout>}/>
              
               <Route path='/category/poundline/stationerypo' element={<MainLayout><Stationerypo/></MainLayout>}/>
              <Route path='/product/stationerypo/:id' element={<MainLayout><Stationerysingl/></MainLayout>}/>
              
               <Route path='/category/poundline/poundtoy' element={<MainLayout><Potoy/></MainLayout>}/>
              <Route path='/product/poundtoy/:id' element={<MainLayout><Potoysingl/></MainLayout>}/>
              
              <Route path='/category/poundline/electric' element={<MainLayout><Electric/></MainLayout>}/>
              <Route path='/product/electric/:id' element={<MainLayout><Electricaldepage/></MainLayout>}/>
              <Route path='/category/bathroom/bathmats' element={<MainLayout><Bathmatsmain/></MainLayout>}/>
              <Route path='/product/bathmats/:id' element={<MainLayout><Bathmatssinglr/></MainLayout>}/>
              <Route path='/category/bathroom/bathroomaccessories' element={<MainLayout><Bathacessories/></MainLayout>}/>
              <Route path='/product/bathroomaccessories/:id' element={<MainLayout><Bathacessoriessingle/></MainLayout>}/>
              <Route path='/category/bathroom/bathroomscale' element={<MainLayout><Bathroommain/></MainLayout>}/>
              <Route path='/product/bathroomscale/:id' element={<MainLayout><Bathroomsinglede/></MainLayout>}/>
              <Route path='/category/bathroom/bathroommirror' element={<MainLayout><Mirrormain/></MainLayout>}/>
              <Route path='/product/bathroommirror/:id' element={<MainLayout><Mirrorsinglepage/></MainLayout>}/>
              <Route path='/category/bathroom/shower' element={<MainLayout><Showermain/></MainLayout>}/>
              <Route path='/product/shower/:id' element={<MainLayout><Showersingle/></MainLayout>}/>
              <Route path='/category/bathroom/showerhead' element={<MainLayout><Showhead/></MainLayout>}/>
              <Route path='/product/showerhead/:id' element={<MainLayout><Showheadsingle/></MainLayout>}/>

               <Route path='/category/laundry/airers' element={<MainLayout><Airerspage/></MainLayout>}/>
              <Route path='/product/airers/:id' element={<MainLayout><Airerssingle/></MainLayout>}/>
               <Route path='/category/laundry/bags' element={<MainLayout><Bags/></MainLayout>}/>
              <Route path='/product/bags/:id' element={<MainLayout><Bagssingle/></MainLayout>}/>
               <Route path='/category/laundry/baskets' element={<MainLayout><Basketst/></MainLayout>}/>
              <Route path='/product/baskets/:id' element={<MainLayout><Basketstsingle/></MainLayout>}/>
               <Route path='/category/laundry/ironingboards' element={<MainLayout><Ironingpage/></MainLayout>}/>
              <Route path='/product/ironingboards/:id' element={<MainLayout><Ioriningsingle/></MainLayout>}/>
               <Route path='/category/laundry/laundryaccessories' element={<MainLayout><Laacess/></MainLayout>}/>
              <Route path='/product/laundryaccessories/:id' element={<MainLayout><Laacesssingle/></MainLayout>}/>
               <Route path='/category/laundry/luggageaccessories' element={<MainLayout><Luggage/></MainLayout>}/>
              <Route path='/product/luggageaccessories/:id' element={<MainLayout><Luggagesingl/></MainLayout>}/>

               <Route path='/category/kitechenwear/bakeware' element={<MainLayout><Bakeware/></MainLayout>}/>
              <Route path='/product/bakeware/:id' element={<MainLayout><Bakewaresingle/></MainLayout>}/>
               <Route path='/category/kitechenwear/bareware' element={<MainLayout><Barewear/></MainLayout>}/>
              <Route path='/product/bareware/:id' element={<MainLayout><Barewearsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/breadbeans' element={<MainLayout><Bread/></MainLayout>}/>
              <Route path='/product/breadbeans/:id' element={<MainLayout><Breadsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/catering' element={<MainLayout><Catering/></MainLayout>}/>
              <Route path='/product/catering/:id' element={<MainLayout><Cateringsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/chrome' element={<MainLayout><Chrome/></MainLayout>}/>
              <Route path='/product/chrome/:id' element={<MainLayout><Chromesingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/cookware' element={<MainLayout><Cookwar/></MainLayout>}/>
              <Route path='/product/cookware/:id' element={<MainLayout><Cookwarsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/cutlery' element={<MainLayout><Cutlery/></MainLayout>}/>
              <Route path='/product/cutlery/:id' element={<MainLayout><Cutlerysingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/kettles' element={<MainLayout><Kettles/></MainLayout>}/>
              <Route path='/product/kettles/:id' element={<MainLayout><Kettlessingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/kitechenacc' element={<MainLayout><KitchenACC/></MainLayout>}/>
              <Route path='/product/kitechenacc/:id' element={<MainLayout><KitchenACCsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/kitechenbi' element={<MainLayout><Kitechenbin/></MainLayout>}/>
              <Route path='/product/kitechenbin/:id' element={<MainLayout><Kitechenbinsingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/kitechengadgets' element={<MainLayout><Kitechenga/></MainLayout>}/>
              <Route path='/product/kitechengadgets/:id' element={<MainLayout><Kitechengasingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/kitechenknives' element={<MainLayout><KitechenKni/></MainLayout>}/>
              <Route path='/product/kitechenknives/:id' element={<MainLayout><KitechenKnisingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/scales' element={<MainLayout><Scaleski/></MainLayout>}/>
              <Route path='/product/scales/:id' element={<MainLayout><Scaleskisingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/plasticboxes' element={<MainLayout><Plasticki/></MainLayout>}/>
              <Route path='/product/plasticboxes/:id' element={<MainLayout><Plastickisingl/></MainLayout>}/>
               {/* <Route path='/category/kitechenwear/s' element={<MainLayout><Simplehu/></MainLayout>}/>
              <Route path='/product/luggageaccessories/:id' element={<MainLayout><Simplehusingl/></MainLayout>}/> */}
               <Route path='/category/kitechenwear/tea' element={<MainLayout><Tea/></MainLayout>}/>
              <Route path='/product/tea/:id' element={<MainLayout><Teasingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/tray' element={<MainLayout><Trays/></MainLayout>}/>
              <Route path='/product/tray/:id' element={<MainLayout><Trayssingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/water' element={<MainLayout><Water/></MainLayout>}/>
              <Route path='/product/water/:id' element={<MainLayout><Watersingl/></MainLayout>}/>
               <Route path='/category/kitechenwear/wooden' element={<MainLayout><Wooden/></MainLayout>}/>
              <Route path='/product/wooden/:id' element={<MainLayout><Woodensingl/></MainLayout>}/>

               <Route path='/category/cleaning/brushware' element={<MainLayout><Brushware/></MainLayout>}/>
              <Route path='/product/brushware/:id' element={<MainLayout><Brushwaresingel/></MainLayout>}/>
               <Route path='/category/cleaning/duster' element={<MainLayout><Duster/></MainLayout>}/>
              <Route path='/product/duster/:id' element={<MainLayout><Dustersingl/></MainLayout>}/>
               <Route path='/category/cleaning/gloves' element={<MainLayout><Gloves/></MainLayout>}/>
              <Route path='/product/gloves/:id' element={<MainLayout><Glovessingl/></MainLayout>}/>
               <Route path='/category/cleaning/mops' element={<MainLayout><Mops/></MainLayout>}/>
              <Route path='/product/mops/:id' element={<MainLayout><Mopssingl/></MainLayout>}/>
               <Route path='/category/cleaning/sponge' element={<MainLayout><Sponge/></MainLayout>}/>
              <Route path='/product/sponge/:id' element={<MainLayout><Spongesingl/></MainLayout>}/>

              <Route path='/category/gardening/bbq' element={<MainLayout><Bbq/></MainLayout>}/>
              <Route path='/product/bbq/:id' element={<MainLayout><Bbqsingle/></MainLayout>}/>
              <Route path='/category/gardening/bird' element={<MainLayout><Bird/></MainLayout>}/>
              <Route path='/product/bird/:id' element={<MainLayout><Birdsingle/></MainLayout>}/>
              <Route path='/category/gardening/camping' element={<MainLayout><Camping/></MainLayout>}/>
              <Route path='/product/camping/:id' element={<MainLayout><Campingsingle/></MainLayout>}/>
              <Route path='/category/gardening/fertilizer' element={<MainLayout><Fertilizer/></MainLayout>}/>
              <Route path='/product/fertilizer/:id' element={<MainLayout><Fertilizersingle/></MainLayout>}/>
              <Route path='/category/gardening/furnitur' element={<MainLayout><Furnitur/></MainLayout>}/>
              <Route path='/product/furnitur/:id' element={<MainLayout><Furnitursingle/></MainLayout>}/>
              <Route path='/category/gardening/giftware' element={<MainLayout><Giftware/></MainLayout>}/>
              <Route path='/product/giftware/:id' element={<MainLayout><Giftwaresingle/></MainLayout>}/>
              <Route path='/category/gardening/growing' element={<MainLayout><Growing/></MainLayout>}/>
              <Route path='/product/growing/:id' element={<MainLayout><Growingsingle/></MainLayout>}/>
              <Route path='/category/gardening/lightening' element={<MainLayout><Lightening/></MainLayout>}/>
              <Route path='/product/lightening/:id' element={<MainLayout><Lighteningsingle/></MainLayout>}/>
              <Route path='/category/gardening/planters' element={<MainLayout><Planters/></MainLayout>}/>
              <Route path='/product/planters/:id' element={<MainLayout><Planterssingle/></MainLayout>}/>
              <Route path='/category/gardening/tools' element={<MainLayout><Toolsacce/></MainLayout>}/>
              <Route path='/product/tools/:id' element={<MainLayout><Toolsaccesingle/></MainLayout>}/>
              <Route path='/category/gardening/watering' element={<MainLayout><Watering/></MainLayout>}/>
              <Route path='/product/watering/:id' element={<MainLayout><Wateringsingle/></MainLayout>}/>
              <Route path='/category/gardening/winterfules' element={<MainLayout><Winterfules/></MainLayout>}/>
              <Route path='/product/winterfules/:id' element={<MainLayout><Winterfulessingle/></MainLayout>}/>

               <Route path='/category/toiletries/babycare' element={<MainLayout><Babycare/></MainLayout>}/>
              <Route path='/product/babycare/:id' element={<MainLayout><Babaysingle/></MainLayout>}/>
               <Route path='/category/toiletries/cotton' element={<MainLayout><Cotton/></MainLayout>}/>
              <Route path='/product/cotton/:id' element={<MainLayout><Cottonsingle/></MainLayout>}/>
               <Route path='/category/toiletries/deodrant' element={<MainLayout><Deodrant/></MainLayout>}/>
              <Route path='/product/deodrant/:id' element={<MainLayout><Deodrantsingle/></MainLayout>}/>
               <Route path='/category/toiletries/giftsets' element={<MainLayout><Giftsets/></MainLayout>}/>
              <Route path='/product/giftsets/:id' element={<MainLayout><Giftsetssingle/></MainLayout>}/>
               <Route path='/category/toiletries/hair' element={<MainLayout><Hair/></MainLayout>}/>
              <Route path='/product/hair/:id' element={<MainLayout><Hairsingle/></MainLayout>}/>
               <Route path='/category/toiletries/hand' element={<MainLayout><Hand/></MainLayout>}/>
              <Route path='/product/hand/:id' element={<MainLayout><Handsingle/></MainLayout>}/>
               <Route path='/category/toiletries/healthcare' element={<MainLayout><Healthcare/></MainLayout>}/>
              <Route path='/product/healthcare/:id' element={<MainLayout><Healthcaresingle/></MainLayout>}/>
               <Route path='/category/toiletries/mouthwash' element={<MainLayout><Mouthwash/></MainLayout>}/>
              <Route path='/product/mouthwash/:id' element={<MainLayout><Mouthwashsingle/></MainLayout>}/>
               <Route path='/category/toiletries/perfume' element={<MainLayout><Perfumes/></MainLayout>}/>
              <Route path='/product/perfume/:id' element={<MainLayout><Perfumessingle/></MainLayout>}/>
               <Route path='/category/toiletries/sanitary' element={<MainLayout><Sanitary/></MainLayout>}/>
              <Route path='/product/sanitary/:id' element={<MainLayout><Sanitarysingle/></MainLayout>}/>
               <Route path='/category/toiletries/saving' element={<MainLayout><Saving/></MainLayout>}/>
              <Route path='/product/saving/:id' element={<MainLayout><Savingsingle/></MainLayout>}/>
               <Route path='/category/toiletries/shampo' element={<MainLayout><Shampo/></MainLayout>}/>
              <Route path='/product/shampo/:id' element={<MainLayout><Shamposingle/></MainLayout>}/>
               <Route path='/category/toiletries/showergel' element={<MainLayout><Showergel/></MainLayout>}/>
              <Route path='/product/showergel/:id' element={<MainLayout><Showergelsingle/></MainLayout>}/>
               <Route path='/category/toiletries/skincare' element={<MainLayout><Skincare/></MainLayout>}/>
              <Route path='/product/skincare/:id' element={<MainLayout><Skincaresingle/></MainLayout>}/>
               <Route path='/category/toiletries/soapbar' element={<MainLayout><Soapbar/></MainLayout>}/>
              <Route path='/product/soapbar/:id' element={<MainLayout><Soapbarsingle/></MainLayout>}/>
               <Route path='/category/toiletries/toothbrush' element={<MainLayout><Toothbrush/></MainLayout>}/>
              <Route path='/product/toothbrush/:id' element={<MainLayout><Toothbrushsingle/></MainLayout>}/>
               <Route path='/category/toiletries/toothpast' element={<MainLayout><Toothpast/></MainLayout>}/>
              <Route path='/product/toothpast/:id' element={<MainLayout><Toothpastsingle/></MainLayout>}/>
               <Route path='/category/toiletries/africa' element={<MainLayout><Africa/></MainLayout>}/>
              <Route path='/product/africa/:id' element={<MainLayout><Africasingle/></MainLayout>}/>

               <Route path='/category/homedecore/candel' element={<MainLayout><Candel/></MainLayout>}/>
              <Route path='/product/candel/:id' element={<MainLayout><Candelsingl/></MainLayout>}/>
               <Route path='/category/homedecore/fathersday' element={<MainLayout><Fatherdays/></MainLayout>}/>
              <Route path='/product/fathersday/:id' element={<MainLayout><Fatherdayssingl/></MainLayout>}/>
               <Route path='/category/homedecore/framsmirror' element={<MainLayout><Framsmirror/></MainLayout>}/>
              <Route path='/product/framsmirror/:id' element={<MainLayout><Framsmirrorsingl/></MainLayout>}/>
               <Route path='/category/homedecore/giftwareh' element={<MainLayout><Giftwarehome/></MainLayout>}/>
              <Route path='/product/giftwareh/:id' element={<MainLayout><Giftwarehomesingl/></MainLayout>}/>
               <Route path='/category/homedecore/incense' element={<MainLayout><Incense/></MainLayout>}/>
              <Route path='/product/incense/:id' element={<MainLayout><Incensesingl/></MainLayout>}/>
               <Route path='/category/homedecore/memorial' element={<MainLayout><Memorials/></MainLayout>}/>
              <Route path='/product/memorial/:id' element={<MainLayout><Memorialssingl/></MainLayout>}/>
               <Route path='/category/homedecore/souvenirs' element={<MainLayout><Souvenirs/></MainLayout>}/>
              <Route path='/product/souvenirs/:id' element={<MainLayout><Souvenirssingl/></MainLayout>}/>
               <Route path='/category/homedecore/st' element={<MainLayout><St/></MainLayout>}/>
              <Route path='/product/st/:id' element={<MainLayout><Stsingal/></MainLayout>}/>
               <Route path='/category/homedecore/wedding' element={<MainLayout><Weeding/></MainLayout>}/>
              <Route path='/product/wedding/:id' element={<MainLayout><Weedingsingal/></MainLayout>}/>

              <Route path='/category/housecleaner/freshner' element={<MainLayout><Freshn/></MainLayout>}/>
              <Route path='/product/freshner/:id' element={<MainLayout><Freshnsingle/></MainLayout>}/>
              <Route path='/category/housecleaner/bleech' element={<MainLayout><Bleech/></MainLayout>}/>
              <Route path='/product/bleech/:id' element={<MainLayout><Bleechsingl/></MainLayout>}/>
              <Route path='/category/housecleaner/car' element={<MainLayout><Car/></MainLayout>}/>
              <Route path='/product/car/:id' element={<MainLayout><Carsingle/></MainLayout>}/>

              <Route path='/category/plastichousewear/foodcon' element={<MainLayout><Foodcon/></MainLayout>}/>
              <Route path='/product/foodcon/:id' element={<MainLayout><Foodconsingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/plastickitechenware' element={<MainLayout><Handwash/></MainLayout>}/>
              <Route path='/product/plastickitechenware/:id' element={<MainLayout><Handwashsingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/storageboxes' element={<MainLayout><Healthcaree/></MainLayout>}/>
              <Route path='/product/storageboxes/:id' element={<MainLayout><Healthcareesingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/kidsplastic' element={<MainLayout><Kidsplas/></MainLayout>}/>
              <Route path='/product/kidsplastic/:id' element={<MainLayout><Kidsplassingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/melamine' element={<MainLayout><MelamineOutdoor/></MainLayout>}/>
              <Route path='/product/melamine/:id' element={<MainLayout><MelamineOutdoorsingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/kidsbathroom' element={<MainLayout><Kidsbathrom/></MainLayout>}/>
              <Route path='/product/kidsbathroom/:id' element={<MainLayout><Kidsbathromsingl/></MainLayout>}/>
              <Route path='/category/plastichousewear/plasticcabnit' element={<MainLayout><Plasticcabnit/></MainLayout>}/>
              <Route path='/product/plasticcabnit/:id' element={<MainLayout><Plasticcabnitsingl/></MainLayout>}/>

              <Route path='/category/diy/barrettine' element={<MainLayout><Barrettine/></MainLayout>}/>
              <Route path='/product/barrettine/:id' element={<MainLayout><Barrettinesingle/></MainLayout>}/>
              <Route path='/category/diy/bartolin' element={<MainLayout><Bartolin/></MainLayout>}/>
              <Route path='/product/bartolin/:id' element={<MainLayout><Bartolinsingle/></MainLayout>}/>
              <Route path='/category/diy/birdbrand' element={<MainLayout><Birdbrand/></MainLayout>}/>
              <Route path='/product/birdbrand/:id' element={<MainLayout><Birdbrandsingle/></MainLayout>}/>
              <Route path='/category/diy/black' element={<MainLayout><Black/></MainLayout>}/>
              <Route path='/product/black/:id' element={<MainLayout><Blacksingle/></MainLayout>}/>
              <Route path='/category/diy/bonit' element={<MainLayout><Bonit/></MainLayout>}/>
              <Route path='/product/bonit/:id' element={<MainLayout><Bonitsingle/></MainLayout>}/>
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App