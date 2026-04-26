"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Truck, CreditCard, ChevronLeft } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.firstName.length < 3) newErrors.firstName = "Mínimo 3 caracteres";
    if (formData.lastName.length < 3) newErrors.lastName = "Mínimo 3 caracteres";
    if (formData.address.length < 5) newErrors.address = "Dirección muy corta";
    if (formData.cardNumber.length < 16) newErrors.cardNumber = "Debe tener 16 números";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handlePay = () => {
  if (validate()) {
    // Asegúrate de que esta ruta coincida con la carpeta que acabas de crear
    router.push("/checkout/order-details"); 
  }
};

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue.length <= 16) {
      setFormData({ ...formData, cardNumber: rawValue });
    }
  };

  // Clases base (mantendremos el estilo inline para forzar la visibilidad)
  const inputBaseClasses = "w-full p-4 border rounded-xl placeholder-slate-400 font-semibold outline-none transition-all focus:ring-2 focus:ring-emerald-500";
  const getBorderClass = (error: string | undefined) => error ? "border-red-500" : "border-slate-300";
  
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/cart" className="flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Shipping Information</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    style={{ color: "black", backgroundColor: "white" }} 
                    className={`${inputBaseClasses} ${getBorderClass(errors.firstName)}`}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs font-semibold pl-1">{errors.firstName}</p>}
                </div>

                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={{ color: "black", backgroundColor: "white" }}
                    className={`${inputBaseClasses} ${getBorderClass(errors.lastName)}`}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs font-semibold pl-1">{errors.lastName}</p>}
                </div>

                <div className="col-span-2 space-y-1">
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ color: "black", backgroundColor: "white" }}
                    className={`${inputBaseClasses} ${getBorderClass(errors.address)}`}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                  {errors.address && <p className="text-red-500 text-xs font-semibold pl-1">{errors.address}</p>}
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
              </div>

              <div className={`border-2 p-6 rounded-xl transition-colors ${errors.cardNumber ? "border-red-500" : "border-slate-200"}`}>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-900">Credit Card Details</label>
                  <span className="text-xs text-slate-500 font-medium">Secure Payment</span>
                </div>

                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={handleCardChange}
                  style={{ color: "black", backgroundColor: "white" }}
                  className={`${inputBaseClasses} font-mono`}
                />
                {errors.cardNumber && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.cardNumber}</p>}
              </div>
            </section>
          </div>

          {/* ... resto del componente igual ... */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 sticky top-10">
              <h3 className="font-bold text-lg mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">$355.85</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-xl text-slate-950">
                  <span>Total</span>
                  <span>$355.85</span>
                </div>
              </div>

              <button
                onClick={handlePay}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
              >
                <Lock size={18} />
                Pay Now
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">Secure 256-bit SSL encrypted checkout</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}