import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import logo2 from '../logo2.png';
export const StockOverviewPage = () => {
  return (
    <div>
      <img className="logo" src={logo2} alt="logo" />
      
      <AutoComplete />
      <StockList />
    </div>
  );
};
