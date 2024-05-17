import Chat from "../src/components/chat/Chat";
import List from "../src/components/list/List";
import Detail from "../src/components/detail/Detail";

function App() {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
