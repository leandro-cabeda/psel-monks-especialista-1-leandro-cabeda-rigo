import HeroSection from "../components/HeroSection";
import CategoryTags from "../components/CategoryTags";
import CardList from "../components/CardList";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <CategoryTags />
      <CardList />
    </>
  );
}
