import Text from '../components/UI/Text/Text.jsx'
import UserSearch from '../components/UI/User Input/UserSearch.jsx'

import './Section1.css'
const Section1 = () =>{
   return (
       <div className="seaction1__container">
            <div className="topPlane">
                <Text />
            </div>
                 
            <div className="bottomPlane" >
                <UserSearch />
            </div>
        </div>
   );
}
export default Section1;