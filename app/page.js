import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';

const HomePage = () => {
  return (
    <div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default HomePage;
