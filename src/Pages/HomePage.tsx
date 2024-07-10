import Header from '@/components/layout/home/Header';
import LetestCategory from '@/components/layout/home/LetestCategory';
import PlantsType from '@/components/layout/home/PlantsType';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <PlantsType></PlantsType>
            <LetestCategory></LetestCategory>
        </div>
    );
};

export default HomePage;