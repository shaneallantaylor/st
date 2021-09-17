import Home from '../components/Home';
import HeroCard from '../components/HeroCard';
import ThemeToggle from '../components/ThemeToggle';

export default function HomePage(props) {
  console.log('homepage props', props);
  return (
    <>
      <HeroCard />
      <ThemeToggle />
      <Home />
    </>
  );
}
