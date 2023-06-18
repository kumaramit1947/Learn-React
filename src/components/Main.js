import RestaurantCard from './Restaurant';
import { mockData } from '../utils/constants';

const Main = () => {
    return (
        <main className="main">
            <section className="restaurants">
                {
                    mockData.map((item,ind)=>{
                        return (<RestaurantCard key={ind} cardData={item}/>);
                    })
                }
                
            </section>
        </main>
    );
}
export default Main;