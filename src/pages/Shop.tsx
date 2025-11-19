import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, X } from "lucide-react";
import chastity from '../assets/chastity.jpeg'
import satin from '../assets/satin.jpeg'
import flogger from '../assets/flogger.webp'
import paddle from '../assets/paddle.jpeg'
import silk from '../assets/silk.jpeg'
import leather from '../assets/leather.jpg'
import hemp from '../assets/hemp.jpg'
import maid from '../assets/maid.avif'
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Chastity Cage", price: 520, image: chastity, category: "Accessories", description: "Lightweight silicone chastity cage for comfortable long-term wear" },
  { id: 2, name: "Luxury Flogger", price: 450, image: flogger, category: "Impact Play", description: "Premium quality flogger for experienced users" },
  { id: 3, name: "Silk Restraints Set", price: 595, image: silk, category: "Restraints", description: "Soft silk restraints for comfortable bondage" },
  { id: 4, name: "Satin Blindfold", price: 450, image:satin , category: "Accessories", description: "Luxurious satin blindfold for sensory play" },
  { id: 5, name: "Hemp Rope Set", price: 475, image: hemp, category: "Bondage", description: "Professional-grade hemp rope for shibari" },
  { id: 6, name: "Leather Ankle Cuffs", price: 510, image: leather, category: "Restraints", description: "Durable leather ankle cuffs with D-rings" },
  { id: 7, name: "Maid Dress", price: 880, image: maid, category: "Harnesses", description: "Fashionable body harness" },
  { id: 8, name: "Paddle Set", price: 485, image: paddle, category: "Impact Play", description: "Three-piece paddle set for all levels" },
];

const Shop = () => {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
    toast.info("Item removed from cart");
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(cart.map(item => {
      if (item.product.id === productId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Shop
            </h1>
            <p className="text-muted-foreground text-lg">
              Curated collection of high-quality lifestyle products
            </p>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="lg" className="relative">
                <ShoppingCart className="mr-2" />
                Cart
                {cart.length > 0 && (
                  <Badge className="ml-2 gradient-primary">{cart.length}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in cart`}
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {cart.map(item => (
                  <Card key={item.product.id} className="p-4">
                    <div className="flex gap-4">
                      <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.product.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, -1)}>-</Button>
                          <span>{item.quantity}</span>
                          <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, 1)}>+</Button>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.product.id)}>
                        <X size={20} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
                  <Button className="w-full gradient-primary shadow-glow" size="lg" asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <Badge className="absolute top-4 right-4 gradient-primary">{product.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <Button onClick={() => addToCart(product)} className="gradient-primary">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
