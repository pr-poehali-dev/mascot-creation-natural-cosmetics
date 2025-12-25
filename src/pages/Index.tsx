import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const ingredients = [
    {
      name: "Масло Ши",
      description: "Глубоко питает и восстанавливает кожу",
      icon: "Droplets"
    },
    {
      name: "Алоэ Вера",
      description: "Успокаивает и увлажняет",
      icon: "Leaf"
    },
    {
      name: "Масло Жожоба",
      description: "Натуральное увлажнение без жирности",
      icon: "Sparkles"
    },
    {
      name: "Витамин Е",
      description: "Защита и омоложение кожи",
      icon: "Heart"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/61ad0e2c-a8a0-49b7-b682-071b21b3ae87/files/1a19f509-ad3b-4457-a200-cd42534a4ef5.jpg" 
                alt="Mascot" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-foreground">NatureLab</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-foreground"}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-foreground"}`}
              >
                О бренде
              </button>
              <button 
                onClick={() => scrollToSection("ingredients")}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "ingredients" ? "text-primary" : "text-foreground"}`}
              >
                Ингредиенты
              </button>
            </div>
            <Button className="hidden md:flex">
              <Icon name="ShoppingBag" size={18} className="mr-2" />
              Каталог
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Натуральная косметика для современной жизни
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                100% натуральные ингредиенты. Ручная работа. Без химии и компромиссов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  В магазин
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/61ad0e2c-a8a0-49b7-b682-071b21b3ae87/files/1a19f509-ad3b-4457-a200-cd42534a4ef5.jpg" 
                alt="NatureLab Mascot" 
                className="relative w-full max-w-md mx-auto animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">О бренде</h2>
            <p className="text-muted-foreground text-lg">Философия натуральности в каждом продукте</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover-scale transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% Натурально</h3>
              <p className="text-muted-foreground">
                Только природные ингредиенты без синтетических добавок
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover-scale transition-all">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Ручная работа</h3>
              <p className="text-muted-foreground">
                Каждый продукт создан с любовью и вниманием к деталям
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover-scale transition-all">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Без химии</h3>
              <p className="text-muted-foreground">
                Никаких парабенов, сульфатов и искусственных ароматизаторов
              </p>
            </Card>
          </div>

          <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="https://cdn.poehali.dev/projects/61ad0e2c-a8a0-49b7-b682-071b21b3ae87/files/1a19f509-ad3b-4457-a200-cd42534a4ef5.jpg" 
                alt="Mascot" 
                className="w-40 h-40 object-contain"
              />
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foreground">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы верим, что красота не должна идти в ущерб здоровью. Каждый наш продукт создается вручную 
                  из тщательно отобранных натуральных ингредиентов. Никаких компромиссов — только чистая, 
                  эффективная косметика для активных и осознанных людей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Ингредиенты</h2>
            <p className="text-muted-foreground text-lg">Сила природы в каждом компоненте</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ingredients.map((ingredient, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 hover-scale transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={ingredient.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{ingredient.name}</h3>
                <p className="text-muted-foreground text-sm">{ingredient.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Icon name="CheckCircle" size={24} />
                <span className="font-semibold text-lg">Без химических добавок</span>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Все компоненты проходят строгий отбор. Мы используем только то, 
                что дарит нам природа — без парабенов, силиконов, минеральных масел и синтетических отдушек.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 py-12 px-6 mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/61ad0e2c-a8a0-49b7-b682-071b21b3ae87/files/1a19f509-ad3b-4457-a200-cd42534a4ef5.jpg" 
                alt="Mascot" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-foreground">NatureLab</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 NatureLab. Натуральная косметика ручной работы
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;