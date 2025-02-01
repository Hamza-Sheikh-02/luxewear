import HeroSection from "@/components/HomePageComponents/HeroSection";
import NewArrivals from "@/components/HomePageComponents/NewArrivals";
import TopSelling from "@/components/HomePageComponents/TopSelling";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <Separator />
      <TopSelling />
      <NewsletterSubscription />
    </>
  );
}
