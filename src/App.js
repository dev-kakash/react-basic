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
import FRParent from "./components/FRParent";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorUi from "./components/ErrorUi";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Click2 from "./components/Click2";
import Hover2 from "./components/Hover2";
import User from "./components/User";
import BaseCount from "./BaseCount";

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
      <RefDemo /> 
      <FoucsInput />
      <FRParent />
      <PortalDemo /> 
      <ErrorUi>
        <ErrorBoundary heroName="BatMan" />
      </ErrorUi>
      <ErrorUi>
        <ErrorBoundary heroName="SuperMan" />
      </ErrorUi>
      <ErrorUi>
        <ErrorBoundary heroName="Joker" />
      </ErrorUi> 
      <ClickCounter name="Akash" />
      <HoverCounter /> */}
      {/* <Click2 />
      <Hover2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "akash" : "Guest")} /> */}
      <BaseCount
        render={(count, incrementCount) => (
          <Click2 count={count} incrementCount={incrementCount} />
        )}
      />
      <BaseCount
        render={(count, incrementCount) => (
          <Hover2 count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
