import { FC } from 'react';
import { ContinentsEnum } from '../../pages/home/Home';
import { useHomeContext } from '../../pages/home/HomeProvider';
import Pressable from '../pressable/Pressable';
import Africa from './Africa';
import Asia from './Asia';
import Europe from './Europe';
import NorthAmerica from './NorthAmerica';
import Oceania from './Oceania';
import SouthAmerica from './SouthAmerica';

const Continents: FC = () => {
  const { continent, onContinent, continentData } = useHomeContext();

  return (
    <div className="continent-section">
      <div className="continent-container">
        <Pressable onClick={() => onContinent(ContinentsEnum.NA)} className="continent-item north-america">
          <NorthAmerica active={continent === ContinentsEnum.NA} />
        </Pressable>
        <Pressable onClick={() => onContinent(ContinentsEnum.SA)} className="continent-item south-america">
          <SouthAmerica active={continent === ContinentsEnum.SA} />
        </Pressable>
        <Pressable onClick={() => onContinent(ContinentsEnum.AS)} className="continent-item asia">
          <Asia active={continent === ContinentsEnum.AS} />
        </Pressable>
        <Pressable onClick={() => onContinent(ContinentsEnum.EU)} className="continent-item europe">
          <Europe active={continent === ContinentsEnum.EU} />
        </Pressable>
        <Pressable onClick={() => onContinent(ContinentsEnum.AF)} className="continent-item africa">
          <Africa active={continent === ContinentsEnum.AF} />
        </Pressable>
        <Pressable onClick={() => onContinent(ContinentsEnum.OC)} className="continent-item oceania">
          <Oceania active={continent === ContinentsEnum.OC} />
        </Pressable>
      </div>

      {
        continentData && (
          <h1 style={{ textAlign: 'center' }}>{continentData.name} ({continentData.code})</h1>
        )
      }
    </div>
  );
};

export default Continents;
