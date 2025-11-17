import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, TrendingUp } from "lucide-react";
import { toast } from "sonner";

interface CryptoData {
  id: string;
  rank: string;
  name: string;
  symbol: string;
  price_usd: string;
}

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCryptoData = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await fetch("https://api.coinlore.net/api/tickers/");
      
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      
      if (result.data) {
        setCryptoData(result.data.slice(0, 10)); // Display top 10
        if (isRefresh) {
          toast.success("Data refreshed successfully");
        }
      }
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      toast.error("Failed to fetch cryptocurrency data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const handleRefresh = () => {
    fetchCryptoData(true);
  };

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(numPrice);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-foreground text-lg">Loading cryptocurrency data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
              Cryptoku
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Live cryptocurrency prices and rankings
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_4px_20px_hsl(var(--primary)/0.3)] transition-all hover:shadow-[0_8px_32px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            <RefreshCw className={`mr-2 h-5 w-5 ${refreshing ? "animate-spin" : ""}`} />
            {refreshing ? "Refreshing..." : "Refresh"}
          </Button>
        </div>

        {/* Crypto Cards - Mobile Optimized */}
        <div className="space-y-3">
          {cryptoData.map((crypto) => (
            <Card
              key={crypto.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.15)] overflow-hidden group"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-primary/30 group-hover:border-primary/60 transition-colors">
                    <span className="text-primary font-bold text-sm">
                      {crypto.rank}
                    </span>
                  </div>

                  {/* Name & Symbol */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg truncate">
                      {crypto.name}
                    </h3>
                    <p className="text-muted-foreground text-sm uppercase">
                      {crypto.symbol}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">USD</span>
                  </div>
                  <p className="font-bold text-primary text-lg md:text-xl whitespace-nowrap">
                    {formatPrice(crypto.price_usd)}
                  </p>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p>Data provided by CoinLore API</p>
          <p className="mt-2">Updates in real-time • Tap refresh to update</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
