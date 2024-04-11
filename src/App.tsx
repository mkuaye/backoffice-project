import { Header } from './components/Header';
import { List } from './components/List';

export function App() {
  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center'>
      <div className='flex flex-col max-w-7xl justify-center'>
        <Header />
        <List />
      </div>
    </div>
  );
}
