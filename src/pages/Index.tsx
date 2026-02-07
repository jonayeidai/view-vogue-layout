import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TopCategories from "@/components/TopCategories";
import PromoBanner from "@/components/PromoBanner";
import ShapeFilter from "@/components/ShapeFilter";
import TrendingProducts from "@/components/TrendingProducts";
import StoresServices from "@/components/StoresServices";
import FeaturedBanner from "@/components/FeaturedBanner";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <TopCategories />
      <PromoBanner />
      <ShapeFilter title="Get the perfect shape – Eyeglasses" />
      <TrendingProducts title="#Trending at OptiVue" />
      <ShapeFilter title="Get the perfect shape – Sunglasses" />
      <StoresServices />
      <TrendingProducts title="Exclusively at OptiVue" showAll={false} />
      <FeaturedBanner />
      <BrandsSection />
      <Footer />
    </div>
  );
};

export default Index;
