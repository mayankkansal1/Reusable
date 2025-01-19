import { Search } from "lucide-react";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import Select from "./Components/Select/Select";
import PasswordInput from "./Components/Input/PasswordInput";
import SearchInput from "./Components/Input/SearchInput";

const Main = () => {
  return (
    <div style={{
      // background:"#020617",
      height:"100%",
      padding:"10px 10px"
    }}>
      <Button onClick={() => console.log("hi")} type="submit" variant="primary">Button</Button>
      <SearchInput
      type="search"
      />
      {/* <div style={{
        margin:"10px 10px"
      }}>
      <Input
        style={{
          display: 'flex',
          alignItems: 'center', // Corrected typo
          position:"absolute",
          paddingLeft:"35px",
          paddingRight:"18px",
          width:"fit-content"
        }}
        // required
        placeholder="Search"
      />
      <Search style={{position:"relative", paddingTop:"8px", marginLeft:"5px", height:"24px" , width:"27px", color:"gray"}}/>
      </div> */}
      <Input type="date" onChange={(e)=>console.log(e.target.value)}/>
      <Select
        value="disabled"
        onChange={(e) => {console.log(e.target.value,"e")}}
        options={[
          { value: 'disabled', label: 'Disabled Option1' },
          { value: 'disabled', label: 'Disabled Option2' },
          { value: 'disabled', label: 'Disabled Option3' },
        ]}
        // disabled
        />
        {/* <PasswordInput/> */}
    </div>
  );
};

export default Main;
