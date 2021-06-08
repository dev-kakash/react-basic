import "./App.css";
import Function from "./components/Function";
import Class from "./components/Class";
import PropsExample from "./components/PropsExample";
import PropsInClass from "./components/PropsInClass";
import StateExample from "./components/StateExample";
import Counter from "./components/Counter";
import DestructuringInFunction from "./components/DestructuringInFunction";
import DestructuringInClass from "./components/DestructuringInClass";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import ClassEventBind from "./ClassEventBind";
import ParentComponent from "./ParentComponent";
import Conditions from "./Conditions";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import StyleModule from "./components/StyleModule";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import Parent from "./components/Parent";
import RefDemo from "./components/RefDemo";
import RefWithClassComp from "./components/RefWithClassComp";
import FoucsInput from "./components/FoucsInput";

function App() {
  return (
    <div className="App">
      {/* <Function />
      <Class />
      <PropsExample name="Akash" age="22" />
      <PropsExample name="Sagar" age="14">
        <small Style="color:red">I have Children Element</small>
      </PropsExample>
      <PropsInClass info="I am from Props" />
      <StateExample />
      <Counter />
      <DestructuringInFunction name="Alex" age="24" />
      <DestructuringInClass name="John" place="Tangail" />
      <FunctionClick />
      <ClassClick />
      <ClassEventBind />
      <ParentComponent />
      <Conditions />
      <NameList />
      <StyleSheet wrapper={true} />
      <Inline />
      <StyleModule />
      <Form />
      <LifeCycleA />
      <FragmentDemo />
      <Table />
      <Parent />
      <RefDemo /> */}
      <FoucsInput />
    </div>
  );
}

export default App;
