import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { FaBitcoin, FaPaypal } from "react-icons/fa";
import { SiVenmo, SiCashapp } from "react-icons/si";
import { Copy, Upload } from "lucide-react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("giftcard");
  const [giftCardFront, setGiftCardFront] = useState<File | null>(null);
  const [giftCardBack, setGiftCardBack] = useState<File | null>(null);
  const [eCode, setECode] = useState("");

  const paymentAddresses = {
    cashapp: "$HouseOfSat",
    paypal: "houseofsatisfaction@paypal.com",
    venmo: "@HouseOfSatisfaction",
    bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    giftcard: "giftcards@houseofsatisfaction.com"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
    const file = e.target.files?.[0];
    if (file) {
      if (side === 'front') setGiftCardFront(file);
      else setGiftCardBack(file);
      toast.success(`${side === 'front' ? 'Front' : 'Back'} of card uploaded`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Payment Methods */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Card 
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'cashapp' ? 'border-primary' : ''}`}
                  onClick={() => setPaymentMethod('cashapp')}
                >
                  <SiCashapp className="mx-auto mb-2 text-green-500" size={28} />
                  <p className="text-sm font-semibold text-center">Cash App</p>
                </Card>
                <Card 
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'paypal' ? 'border-primary' : ''}`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <FaPaypal className="mx-auto mb-2 text-blue-500" size={28} />
                  <p className="text-sm font-semibold text-center">PayPal</p>
                </Card>
                <Card 
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'venmo' ? 'border-primary' : ''}`}
                  onClick={() => setPaymentMethod('venmo')}
                >
                  <SiVenmo className="mx-auto mb-2 text-blue-400" size={28} />
                  <p className="text-sm font-semibold text-center">Venmo</p>
                </Card>
                <Card 
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth ${paymentMethod === 'bitcoin' ? 'border-primary' : ''}`}
                  onClick={() => setPaymentMethod('bitcoin')}
                >
                  <FaBitcoin className="mx-auto mb-2 text-orange-500" size={28} />
                  <p className="text-sm font-semibold text-center">Bitcoin</p>
                </Card>
                <Card 
                  className={`p-4 cursor-pointer hover:border-primary transition-smooth col-span-2 md:col-span-1 ${paymentMethod === 'giftcard' ? 'border-primary' : ''}`}
                  onClick={() => setPaymentMethod('giftcard')}
                >
                  <Upload className="mx-auto mb-2 text-primary" size={28} />
                  <p className="text-sm font-semibold text-center">Gift Card</p>
                </Card>
              </div>

              <Separator className="my-6" />

              {/* Payment Details */}
              <div className="space-y-4">
                {paymentMethod !== 'giftcard' && (
                  <Card className="p-6 bg-muted">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Send payment to:</p>
                        <p className="font-mono text-sm font-semibold text-primary break-all">
                          {paymentAddresses[paymentMethod as keyof typeof paymentAddresses]}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paymentAddresses[paymentMethod as keyof typeof paymentAddresses])}
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </Card>
                )}

                {paymentMethod === 'giftcard' && (
                  <div className="space-y-4">
                    <Card className="p-6 bg-muted">
                      <p className="text-sm text-muted-foreground mb-1">Submit E-Code to:</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-sm font-semibold text-primary break-all">
                          {paymentAddresses.giftcard}
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(paymentAddresses.giftcard)}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="giftcard-front">Upload Front of Card</Label>
                        <div className="mt-2">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <span className="text-sm text-muted-foreground">
                              {giftCardFront ? giftCardFront.name : 'Click to upload'}
                            </span>
                            <input
                              id="giftcard-front"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, 'front')}
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="giftcard-back">Upload Back of Card</Label>
                        <div className="mt-2">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <span className="text-sm text-muted-foreground">
                              {giftCardBack ? giftCardBack.name : 'Click to upload'}
                            </span>
                            <input
                              id="giftcard-back"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(e, 'back')}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="ecode">Or Enter E-Code</Label>
                      <Input
                        id="ecode"
                        placeholder="Enter gift card E-Code"
                        value={eCode}
                        onChange={(e) => setECode(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Shipping Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ship-name">Full Name</Label>
                  <Input id="ship-name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input id="address1" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                  <Input id="address2" className="mt-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" required className="mt-2" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input id="zip" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="ship-phone">Phone Number</Label>
                  <Input id="ship-phone" type="tel" required className="mt-2" />
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <Card className="p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">$450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$0.00</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary">$450.00</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="mt-2" />
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required className="mt-2" />
              </div>

              <Button type="submit" className="w-full gradient-primary shadow-glow" size="lg">
                Complete Order
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              By completing this order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
