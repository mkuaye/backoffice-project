import { Header } from './components/Header';
import { List } from './components/List';

export function App() {
  return (
    <div className='w-screen h-screen bg-black flex flex-col items-center'>
      <div className='flex flex-col max-w-7xl w-full'>
        <Header />
        <List />
      </div>
    </div>
  );
}
